/**
 * Created by shahab on 3/3/16.
 */
'use strict';
const bcrypt = require('bcrypt');
const Boom = require('boom');
const Joi = require('joi');
const validator = require('validator');
const randomstring = require('randomstring');
const moment = require('moment');
const _ = require('underscore');
let Path = require('path');
let fs =  require('fs');


const STATUS_MSG = require('../Config/statusMessage');
/*const GOOGLE_API_KEY = require('../Config/serverConstants').GOOGLE_API_KEY;*/

//Common functions for all apps
let sendError = function (data, language) {
    console.trace('ERROR OCCURED ', data, language)

    if (typeof data == 'object' && data.hasOwnProperty('statusCode') && data.hasOwnProperty('customMessage')) {
        console.log('attaching resposnetype', data.type)

        let errorToSend = Boom.create(data.statusCode, data.customMessage);
        errorToSend.output.payload.responseType = data.type;
        if (data.dataToSend) {
            errorToSend.output.payload.data = data.dataToSend;
        }
        return errorToSend;
    } else {
        console.log('in else', typeof data, data.name)
        let errorToSend = '';
        if (data && typeof data == 'object') {
            if (data.name == 'MongoError') {
                errorToSend += STATUS_MSG.ERROR.DB_ERROR.customMessage;
                if (data.code == 11000 && data.errmsg) {
                    let duplicateValue = data.errmsg && data.errmsg.substr(data.errmsg.lastIndexOf('{ : "') + 5);
                    duplicateValue = duplicateValue.replace('}', '');
                    errorToSend += STATUS_MSG.ERROR.DUPLICATE.customMessage + " : " + duplicateValue;
                }
            } else if (data.name == 'ApplicationError') {
                errorToSend += STATUS_MSG.ERROR.APP_ERROR.customMessage + ' : ';
            } else if (data.name == 'ValidationError') {
                console.log('in validation', data.errors)
                if (data.errors && JSON.stringify(data.errors).indexOf('CastError') > -1) {
                    errorToSend += STATUS_MSG.ERROR.DB_ERROR.customMessage + STATUS_MSG.ERROR.INVALID_ID.customMessage;
                } else {
                    errorToSend += STATUS_MSG.ERROR.APP_ERROR.customMessage + data.message;
                }
            } else if (data.name == 'CastError') {
                console.log(' in cast error')
                errorToSend += STATUS_MSG.ERROR.DB_ERROR.customMessage + STATUS_MSG.ERROR.INVALID_ID.customMessage + data.value;
            }
        } else {
            errorToSend = data
        }
        let customErrorMessage = errorToSend;
        if (!customErrorMessage) {
            customErrorMessage = 'Something went wrong.';
        }
        console.log('customErrorMessage', customErrorMessage)
        if (typeof customErrorMessage == 'string') {
            if (errorToSend.indexOf("[") > -1) {
                customErrorMessage = errorToSend.substr(errorToSend.indexOf("["));
            }
            customErrorMessage = customErrorMessage && customErrorMessage.replace(/"/g, '');
            customErrorMessage = customErrorMessage && customErrorMessage.replace('[', '');
            customErrorMessage = customErrorMessage && customErrorMessage.replace(']', '');
        }
        //if(customErrorMessage.toLowerCase().indexOf('db error')!==-1){
        //    customErrorMessage='It seems your internet connection is not working, try again later.'
        //}
        return Boom.create(400, customErrorMessage)
    }
};

let sendSuccess = function (successMsg, data) {
    successMsg = successMsg || STATUS_MSG.SUCCESS.DEFAULT.customMessage;
    if (typeof successMsg == 'object' && successMsg.hasOwnProperty('statusCode')
        && successMsg.hasOwnProperty('customMessage')) {
        return {statusCode: successMsg.statusCode, message: successMsg.customMessage, data: data || null};

    } else {
        return {statusCode: 200, message: successMsg, data: data || null};

    }
};

let CryptData = function (stringToCrypt) {
    return bcrypt.hashSync(stringToCrypt, 8);
};

let verifyEmailFormat = function (email) {
    return validator.isEmail(email)
};

let comparePassword = function (password, hashedDBPass) {
    return bcrypt.compareSync(password, hashedDBPass);
};

let failActionFunction = function (request, reply, source, error) {
    console.log('request', request.payload)
    console.log('error', error)
    let customErrorMessage = '';
    if (error.output.payload.message.indexOf("[") > -1) {
        customErrorMessage = error.output.payload.message.substr(error.output.payload.message.indexOf("["));
    } else {
        customErrorMessage = error.output.payload.message;
    }
    customErrorMessage = customErrorMessage.replace(/"/g, '');
    customErrorMessage = customErrorMessage.replace('[', '');
    customErrorMessage = customErrorMessage.replace(']', '');
    error.output.payload.message = customErrorMessage;
    delete error.output.payload.validation;
    return reply(error);
};

let deleteSensitiveData = function (incomingObj) {
    if (incomingObj.hasOwnProperty('userData') && incomingObj.userData) {
        delete incomingObj['userData']['newCountryCode'];
        delete incomingObj['userData']['newPhoneNo'];
        delete incomingObj['userData']['deviceToken'];
        delete incomingObj['userData']['accessToken'];
        delete incomingObj['userData']['password'];
        delete incomingObj['userData']['__v'];
        delete incomingObj['userData']['OTPCode'];
        delete incomingObj['userData']['passwordResetToken'];
        delete incomingObj['userData']['emailVerificationToken'];
        delete incomingObj['userData']['softDelete'];
    }

    return incomingObj;
};

let generateRandomString = function () {
    return randomstring.generate(6);
};

let hasDuplicate = function (arrayToCheck) {
    return (arrayToCheck.length != _.uniq(arrayToCheck).length);
};


let defaultResponseHandlerFunction = function (objectToProcess) {
    if (objectToProcess.err) {
        objectToProcess.replyObject(sendError(objectToProcess.err));
    } else {
        if (objectToProcess.data) {
            objectToProcess.data = deleteSensitiveData(objectToProcess.data);
        }
        objectToProcess.replyObject(sendSuccess(objectToProcess.statusMsg || STATUS_MSG.SUCCESS.DEFAULT, objectToProcess.data)).code(objectToProcess.code || 200)
    }
};
let defaultResponseHandlerWithHeadersFunction = function (objectToProcess) {

    if (objectToProcess.err) {
        objectToProcess.replyObject(sendError(objectToProcess.err));
    }
    else {
        objectToProcess.replyObject(objectToProcess.data)
            .header('Content-Type', 'text/csv')
            .header('content-disposition', 'attachment; filename = ConweighReport.csv;')
    }
};

let authorizationHeaderObj = Joi.object({
    authorization: Joi.string().required().description("Eg: Bearer token_data")
}).unknown();

let generateFourDigitRandomNumber = function (times) {
    times = times || 1;
    let arrayToReturn = [];
    for (let i = 0; i < times; i++) {
        var numberToPush = Math.floor((Math.random() * 999999) + 111111);
        numberToPush = numberToPush.toString();
        if (numberToPush.length > 6) {
            numberToPush = numberToPush.substr(0, 5)
        }
        arrayToReturn.push(numberToPush)
    }
    return arrayToReturn;
};

let validateStartTime = function (incomingArray) {
    var invalidStartTime = false;
    if (incomingArray && incomingArray.length > 0) {
        incomingArray.forEach(function (windowObj) {
            var hrs = parseInt(windowObj.displayLatestStartTime.substr(0, 2));
            var mins = parseInt(windowObj.displayLatestStartTime.substr(2, 4));
            if (hrs >= 0 && hrs <= 23 && mins >= 0 && mins <= 59) {
                //fine
            } else {
                invalidStartTime = true
            }

            var hrs = parseInt(windowObj.displayEarliestStartTime.substr(0, 2));
            var mins = parseInt(windowObj.displayEarliestStartTime.substr(2, 4));
            if (hrs >= 0 && hrs <= 23 && mins >= 0 && mins <= 59) {
                //fine
            } else {
                invalidStartTime = true
            }
        })

    } else {
        invalidStartTime = true
    }
    return invalidStartTime
};

let checkDuplicateTimeWindowValues = function (incomingArray) {
    var duplicateValues = false;
    var objToFill = {};
    if (incomingArray && incomingArray.length > 0) {
        incomingArray.forEach(function (windowObj) {
            objToFill[windowObj.displayDate.toString() + windowObj.displayEarliestStartTime.toString() + windowObj.displayLatestStartTime.toString()] = 1;
        });
        console.log('incomingArray.length', incomingArray.length)
        console.log('incomingArray.length', Object.keys(objToFill).length)
        if (incomingArray.length != Object.keys(objToFill).length) {
            duplicateValues = true;
        }
    }

    return duplicateValues
};

let createStartTime = function (date, time, offset) {
    console.log('date', date, time, offset)
    offset = offset * 1000;
    var timeToReturn = date + 'T' + time.substr(0, 2) + ':' + time.substr(2, 2) + ':00.000Z';
    console.log('earlier', timeToReturn)
    if ( isNaN(new Date(timeToReturn).getTime()) ) {
        return false
    } else {
        timeToReturn = new Date(timeToReturn).getTime() - offset;
        timeToReturn = new Date(timeToReturn).toISOString();
        console.log('later', timeToReturn)
        return timeToReturn
    }
};

/*let getOffsetViaLatLong = function (latLongObj, callback) {
    let timezoner = require('timezoner');
    let rawOffset = 0;
    let dstOffset = 0;
    let timeZoneId = '';
    /* Request timezone with location coordinates */
 /*   timezoner.getTimeZone(
        latLongObj.lat, // Latitude coordinate
        latLongObj.long, // Longitude coordinate
        function (err, data) {
            if (err) {
                callback(err)
            } else {
                console.log('HERETIMEzonedata', data);
                rawOffset = data.rawOffset;
                dstOffset = data.dstOffset;
                timeZoneId = data.timeZoneId;
                callback(null, {offset: rawOffset + dstOffset, timeZoneId: timeZoneId})
            }
        }, {language: 'es', key: GOOGLE_API_KEY}
    );
};
*/

let findEarliestDate = function (date) {
    var earliestStartTime = _.pluck(date, 'earliestStartTime');
    var minDateKey = earliestStartTime[0],
        minDate = earliestStartTime[0];

    for (var i = 1; i < earliestStartTime.length; i++) {
        var date = earliestStartTime[i];
        if (minDate > date) {
            minDate = date;
            minDateKey = earliestStartTime[i];
        }
    }
    return minDateKey

};

let findLastDate = function (date) {
    var earliestStartTime = _.pluck(date, 'latestStartTime');
    var minDateKey = earliestStartTime[0],
        minDate = earliestStartTime[0];

    for (var i = 1; i < earliestStartTime.length; i++) {
        var date = earliestStartTime[i];
        if (minDate < date) {
            minDate = date;
            minDateKey = earliestStartTime[i];
        }
    }

    var nowDate = moment().utc().startOf('day').toISOString();
    var getNextDate = moment(nowDate).add(-1, 'days');    // add one day
    var min = getNextDate.diff(moment(minDateKey), 'minutes');
   // console.log("getNextDate", getNextDate, "moment(minDateKey)", moment(minDateKey), "min", min);


    var min = moment().diff(moment(minDateKey), 'minutes');
    if (min > 0) {
        return true
    } else {
        return false
    }

};
let checkPropertyValue = function (value) {
    if (value == '' || value == 'null' || value == 'undefined' || value == undefined || value == 0 || value == false) {
        return false;
    }
    else {
        return true;
    }

}



const generatePdf = function (pdfData, callbk) {
    //let phantom = require('phantom-html2pdf');
    let pdfConverter = require('html-pdf');
    let md5 = require('md5');
    let CurrentDate = new Date();
    CurrentDate = new Date().toISOString();
    CurrentDate +=  Math.ceil(Math.random()*20000);
    CurrentDate  =  md5(CurrentDate);
    let HtmlFilePath =  Path.resolve(".") + "/uploads/" + "InvoiceVGM"+CurrentDate+".html";
    let pdfPath = Path.resolve(".") + "/uploads/" + "Invoice2VGM"+CurrentDate+".pdf";
    fs.writeFile(HtmlFilePath, pdfData, function (err) {
        if (err) {
            callbk(err);
        }
        else {

            var options = {
                // / Export options"directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp' 
                // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html 
                "height": '11.9929in',        // allowed units: 297mm, cm, 11.6929in, 1060px 
                "width": "8.2677in",          // allowed units: 210mm, cm, 8.2677in,700px 
                "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid 
                "orientation": "portrait" // portrait or landscape 
            }



            var html = fs.readFileSync(HtmlFilePath, 'utf8');
            pdfConverter.create(html, options).toFile(pdfPath, function(err, res) {
                if (err) return callbk(err);
                console.log(res);
                // { filename: '/app/businesscard.pdf' } 
                return callbk(null, CurrentDate);
            });
        }
    });
};

const generateOtherPdf = function (pdfData, containersLength, callbk) {
    //let phantom = require('phantom-html2pdf');
    let pdfConverter = require('html-pdf');
    let md5 = require('md5');
    let CurrentDate = new Date();
    CurrentDate = new Date().toISOString();
    CurrentDate +=  Math.ceil(Math.random()*20000);
    CurrentDate  =  md5(CurrentDate);
    let HtmlFilePath =  Path.resolve(".") + "/uploads/" + "InvoiceVGM"+CurrentDate+".html";
    let pdfPath = Path.resolve(".") + "/uploads/" + "Invoice2VGM"+CurrentDate+".pdf";
    let height = '1200px';

    if (containersLength > 14) {
        height = '1400px'
    }

    fs.writeFile(HtmlFilePath, pdfData, function (err) {
        if (err) {
            callbk(err);
        }
        else {

            var options = {
                // / Export options"directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp' 
                // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html 
                "height": height,        // allowed units: mm, cm, in,  
                "width": "900px",          // allowed units: mm, cm, in,700px 
                "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid 
                "orientation": "portrait" // portrait or landscape 
            }



            var html = fs.readFileSync(HtmlFilePath, 'utf8');
            pdfConverter.create(html, options).toFile(pdfPath, function(err, res) {
                if (err) return callbk(err);
                console.log(res);
                // { filename: '/app/businesscard.pdf' } 
                return callbk(null, CurrentDate);
            });
        }
    });
};




module.exports = {
    sendError: sendError,
    createStartTime: createStartTime,
   // getOffsetViaLatLong: getOffsetViaLatLong,
    validateStartTime: validateStartTime,
    checkDuplicateTimeWindowValues: checkDuplicateTimeWindowValues,
    hasDuplicate: hasDuplicate,
    comparePassword: comparePassword,
    generateRandomString: generateRandomString,
    verifyEmailFormat: verifyEmailFormat,
    authorizationHeaderObj: authorizationHeaderObj,
    generateFourDigitRandomNumber: generateFourDigitRandomNumber,
    defaultResponseHandlerFunction: defaultResponseHandlerFunction,
    CryptData: CryptData,
    failActionFunction: failActionFunction,
    sendSuccess: sendSuccess,
    defaultResponseHandlerWithHeadersFunction: defaultResponseHandlerWithHeadersFunction,
    checkPropertyValue: checkPropertyValue,
    findEarliestDate: findEarliestDate,
    findLastDate: findLastDate,
    generatePdf:generatePdf,
    generateOtherPdf: generateOtherPdf
};