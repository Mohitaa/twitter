'use strict';

const countlike = require("Models/countlike");

const countLike = function(likeinfo, callback){
    console.log("TO BE SAVED >>>>>>>>>>>>>",likeinfo);
    new countlike(likeinfo).save(function(err,data)
    	{
    		
    			console.log("data "+data);
    		
    		return callback(err,data);
    	}); 
};

module.exports = {
    countLike : countLike
};