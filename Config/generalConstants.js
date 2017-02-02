'use strict';

const swaggerDefaultResponseMessages = [
    {code: 200, message: 'OK'},
    {code: 400, message: 'Bad Request'},
    {code: 401, message: 'Unauthorized'},
    {code: 404, message: 'Data Not Found'},
    {code: 500, message: 'Internal Server Error'}
];

const ALLOWED_IMAGE_EXT = ['JPEG', 'JPG','PNG','PDF','BMP','GIF','TIFF'];

const FILE_FORMAT = ['CSV', 'TXT', 'JPEG', 'DOCX', 'PPT', 'DOC', 'JPEG', 'JPG','PNG','PDF','BMP','GIF', 'TIFF'];

const DEFAULT_HAPI_PLUGIN = {
    'hapi-swagger': {
        payloadType: 'form',
        responseMessages: swaggerDefaultResponseMessages
    }
};

const DEFAULT_HAPI_PLUGIN_WITHOUT_FORM = {
    'hapi-swagger': {
        responseMessages: swaggerDefaultResponseMessages
    }
};

const DEFAULT_HAPI_FILE_PAYLOAD = {
    output: 'file',
    parse: true,
    allow: 'multipart/form-data'
};

const DEFAULT_HAPI_FILE_PAYLOAD_FOR_DOCUMENTS= {
    output: 'file',
    parse: true,
    timeout: false,
    maxBytes: 209715200,
    allow: 'multipart/form-data'
};


const SCREEN_TO_SHOW = {
    HOMEPAGE: 'HOMEPAGE',
    PAYMENT: 'PAYMENT',
    FEEDBACK: 'FEEDBACK'
};

const MAX_PEDESTAL_FOR_INDIVIDUAL_CONTRACTOR = 1;
const MAX_PEDESTAL_FOR_SUB_CONTRACTOR = 1;


const APP_TYPES = {
    CUSTOMER: 'CUSTOMER',
    CONTRACTOR: 'CONTRACTOR',
    MANAGER: 'MANAGER'
};

const STATUS_TYPE = {
    APPROVE_CONTRACTOR:'APPROVE_CONTRACTOR',
    APPROVE: 'APPROVE',
    REJECT: 'REJECT',
    CANCEL:'CANCEL',
    REQUEST:'REQUEST',
    LOST:'LOST',
    ALL:'ALL'
};

const REGISTER_STEPS_CONTRACTOR = [1,2,3];

const REGISTER_STEPS_CUSTOMER = [1,2,3, 4];

const DEVICE_TYPES = {
    IOS: 'IOS',
    WEB: 'WEB',
    OTHERS: 'OTHERS',
    ANDROID: 'ANDROID'
};

const GEN_CONSTANTS = {
    SCREEN_TO_SHOW: SCREEN_TO_SHOW,
    MAX_PEDESTAL_FOR_INDIVIDUAL_CONTRACTOR: MAX_PEDESTAL_FOR_INDIVIDUAL_CONTRACTOR,
    MAX_PEDESTAL_FOR_SUB_CONTRACTOR: MAX_PEDESTAL_FOR_SUB_CONTRACTOR,
    DEFAULT_HAPI_PLUGIN_WITHOUT_FORM: DEFAULT_HAPI_PLUGIN_WITHOUT_FORM,
    APP_TYPES: APP_TYPES,
    REGISTER_STEPS_CUSTOMER: REGISTER_STEPS_CUSTOMER,
    ALLOWED_IMAGE_EXT: ALLOWED_IMAGE_EXT,
    REGISTER_STEPS_CONTRACTOR: REGISTER_STEPS_CONTRACTOR,
    DEVICE_TYPES: DEVICE_TYPES,
    DEFAULT_HAPI_FILE_PAYLOAD: DEFAULT_HAPI_FILE_PAYLOAD,
    DEFAULT_HAPI_FILE_PAYLOAD_FOR_DOCUMENTS: DEFAULT_HAPI_FILE_PAYLOAD_FOR_DOCUMENTS,
    DEFAULT_HAPI_PLUGIN: DEFAULT_HAPI_PLUGIN,
    FILE_FORMAT: FILE_FORMAT,
    STATUS_TYPE:STATUS_TYPE
};

module.exports = GEN_CONSTANTS;
