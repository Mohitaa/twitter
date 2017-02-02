'use strict';

let STATUS_MSG = {
    ERROR: {
        INVALID_USER_PASS: {
            statusCode: 401,
            type: 'INVALID_USER_PASS',
            customMessage: 'Invalid username or password'
        },
        VALID_URL: {
            statusCode: 401,
            type: 'This youtube url is not valid.',
            customMessage: 'VALID_URL' 
        },
        INVALID_EMAIL_PASS: {
            statusCode: 401,
            type: 'INVALID_EMAIL_PASS',
            customMessage: 'Invalid email or password'
        },
        TOKEN_ALREADY_EXPIRED: {
            statusCode: 401,
            customMessage: 'Token Already Expired',
            type: 'TOKEN_ALREADY_EXPIRED'
        },
        INVALID_REGISTRATION_STEP: {
            statusCode: 400,
            customMessage: 'Invalid Registration Step',
            type: 'INVALID_REGISTRATION_STEP'
        },
        REMOVE_ZIP_CODE: {
            statusCode: 400,
            customMessage: 'Zip code is not moved from region',
            type: 'REMOVE_ZIP_CODE'
        },
        SUB_USER_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Sub user is already exist in other branch',
            type: 'SUB_USER_ALREADY_EXIST'
        },
        SEEK_RELEASE: {
            statusCode: 400, 
            customMessage: 'First seek release Equipment',
            type: 'SEEK_RELEASE'
        },
        ACCEPTED_ORDER: {
            statusCode: 400,
            customMessage: 'This order has already been accepted',
            type: 'ACCEPTED_ORDER'
        },
        UPDATE_EQUIPMENT: {
            statusCode: 400,
            customMessage: 'Contractor is on duty,You cannot update at this moment',
            type: 'UPDATE_EQUIPMENT'
        },
        ACCEPTED_LOCATION: {
            statusCode: 400,
            customMessage: 'Your location is not updated',
            type: 'ACCEPTED_LOCATION'
        },
        NOT_REGISTERED: {
            statusCode: 400,
            customMessage: 'Customer registration not completed yet',
            type: 'NOT_REGISTERED'
        },
        CONTRACTOR_NOT_REGISTERED: {
            statusCode: 400,
            customMessage: 'Contractor registration not completed yet',
            type: 'CONTRACTOR_NOT_REGISTERED'
        },
        CONTAINER_LIMIT: {
            statusCode: 400,
            customMessage: 'Actual containers cannot exceed booked containers',
            type: 'CONTAINER_LIMIT'
        },
        LOST_SEAL_ERROR: {
            statusCode: 400,
            customMessage: 'Lost seals cannot be  more than the available seals',
            type: 'LOST_SEAL_ERROR'
        },
        REGION_ID_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Invalid region id detected',
            type: 'REGION_ID_NOT_FOUND'
        },
        RATES_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Rates  not found',
            type: 'RATES_NOT_FOUND'
        },
        CONTAINER_NOT_FOUND: { 
            statusCode: 400, 
            customMessage: 'Container  not found', 
            type: 'CONTAINER_NOT_FOUND'
         },
        DUPLICATE_PEDESTAL: {
            statusCode: 400,
            customMessage: 'Duplicate pedestal id detected',
            type: 'DUPLICATE_PEDESTAL'
        },
        MANAGER_BLOCK: {
            statusCode: 400,
            customMessage: 'Your account has been blocked by super admin, Please contact Conweigh to access your account',
            type: 'MANAGER_BLOCK'
        },
        ASSET_MANAGER: {
            statusCode: 400,
            customMessage: 'Only Equipment manager can login to App',
            type: 'ASSET_MANAGER'
        },
        INCORRECT_PEDESTAL_WEIGHT: {
            statusCode: 400,
            customMessage: 'Pedestal weight is higher than gross weight',
            type: 'INCORRECT_PEDESTAL_WEIGHT'
        },
        PROMO_CODE_EXIST: {
            statusCode:400,
            customMessage : 'Promo Code already exists',
            type : 'PROMO_CODE_EXIST'
        },
        INVALID_PROMO_CODE: {
            statusCode:400,
            customMessage : 'Your Promo Code is invalid',
            type : 'INVALID_PROMO_CODE'
        },
        SEAL_EXIST: {
            statusCode: 400,
            customMessage: 'This seal has already been used',
            type: 'SEAL_EXIST'
        },
        CONTAINER_ALREADY_SCANNED: {
            statusCode: 400,
            customMessage: 'This container has already been scanned',
            type: 'CONTAINER_ALREADY_SCANNED'
        },
        ALREADY_ADDED_FAVOURITE: {
            statusCode: 400,
            customMessage: 'Contractor already exists in favourite list',
            type: 'ALREADY_ADDED_FAVOURITE'
        },
        COMPLETED_CONTAINERS: {
            statusCode: 400,
            customMessage: 'All containers have been scanned already.',
            type: 'COMPLETED_CONTAINERS'
        },
        MISSING_COMPANY_NAME: {
            statusCode: 400,
            customMessage: 'Company Name is required',
            type: 'MISSING_COMPANY_NAME'
        },
        MISSING_COMPANY_NUMBER: {
            statusCode: 400,
            customMessage: 'Registered Company Number is Required',
            type: 'MISSING_COMPANY_NUMBER'
        },
        DUPLICATE_TIME_WINDOW: {
            statusCode: 400,
            customMessage: 'Time window cannot have duplicate values',
            type: 'DUPLICATE_TIME_WINDOW'
        },
        BOOKING_RATE_NOT: {
            statusCode: 400,
            customMessage: 'Booking rate not found',
            type: 'BOOKING_RATE_NOT'
        },
        CONSTANT_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Constant Not Found',
            type: 'CONSTANT_NOT_FOUND'
        },
        INVALID_TIME_WINDOW: {
            statusCode: 400,
            customMessage: 'Time window is having invalid time values',
            type: 'INVALID_TIME_WINDOW'
        },
        SAME_CARD: {
            statusCode: 400,
            customMessage: 'This card is already added',
            type: 'SAME_CARD'
        },
        NOT_IN_PLACED_STATUS: {
            statusCode: 400,
            customMessage: 'Booking is not in placed status, cannot be accepted/rejected at this moment',
            type: 'NOT_IN_PLACED_STATUS'
        },
        CANNOT_DELETE_BOOKING: {
            statusCode: 400,
            customMessage: 'Booking is not in placed status, cannot delete at this moment',
            type: 'CANNOT_DELETE_BOOKING'
        },
        CANNOT_CANCEL_BOOKING: {
            statusCode: 400,
            customMessage: 'Booking cannot be cancelled at this moment',
            type: 'CANNOT_CANCEL_BOOKING'
        },
        INVALID_BOOKING_STATUS: {
            statusCode: 400,
            customMessage: 'Invalid Booking Status',
            type: 'INVALID_BOOKING_STATUS'
        },
        WEIGH_ONE_CONTAINER: {
            statusCode: 400,
            customMessage: 'You need to weigh at least one container.',
            type: 'WEIGH_ONE_CONTAINER'
        },
        ALREADY_FINISH: {
            statusCode: 400,
            customMessage: 'You have  already completed this booking',
            type: 'ALREADY_FINISH'
        },
        CUSTOMER_PROFILE_UPDATE_ERROR: {
            statusCode: 400,
            customMessage: 'Only Head Users are allowed to change profile details',
            type: 'CUSTOMER_PROFILE_UPDATE_ERROR'
        },
        SET_NOT_COMPLETE: {
            statusCode: 400,
            customMessage: 'This set does not have required number of pedestals',
            type: 'SET_NOT_COMPLETE'
        },
        BCHU_SELF_ASSIGN: {
            statusCode: 400,
            customMessage: 'You are not MCHU of this branch',
            type: 'BCHU_SELF_ASSIGN'
        },
        ALREADY_ASSOCIATED: {
            statusCode: 400,
            customMessage: 'This contractor already has a parent contractor',
            type: 'ALREADY_ASSOCIATED'
        },
        ROLE_ALREADY_ASSOCIATED: {
            statusCode: 400,
            customMessage: 'Management role is already associated to other manager',
            type: 'ROLE_ALREADY_ASSOCIATED'
        },
        ALREADY_ASSOCIATED_CUSTOMER: {
            statusCode: 400,
            customMessage: 'This customer already has a parent customer',
            type: 'ALREADY_ASSOCIATED_CUSTOMER'
        },
        ALREADY_DISASSOCIATED: {
            statusCode: 400,
            customMessage: 'This contractor has been already disassociated',
            type: 'ALREADY_DISASSOCIATED'
        },
        ALREADY_DISASSOCIATED_CUSTOMER: {
            statusCode: 400,
            customMessage: 'This contractor has been already disassociated',
            type: 'ALREADY_DISASSOCIATED_CUSTOMER'
        },
        NO_PENDING_ASSOCIATION: {
            statusCode: 400,
            customMessage: 'No pending association request found',
            type: 'NO_PENDING_ASSOCIATION'
        },
        NO_REQUEST_FOUND: {
            statusCode: 400,
            customMessage: 'No pending request found',
            type: 'NO_REQUEST_FOUND'
        },
        NO_PENDING_DISASSOCIATION: {
            statusCode: 400,
            customMessage: 'No pending disassociation request found',
            type: 'NO_PENDING_DISASSOCIATION'
        },
        ALREADY_DISASSOCIATION: {
            statusCode: 400,
            customMessage: 'This user already has a disassociation request',
            type: 'NO_PENDING_DISASSOCIATION'
        },
        ALREADY_UNASSIGNED: {
            statusCode: 400,
            customMessage: 'This equipment is already in unassigned state',
            type: 'ALREADY_UNASSIGNED'
        },
        MISSING_CARD_INFO: {
            statusCode: 400,
            customMessage: 'Card Info Is Missing',
            type: 'MISSING_CARD_INFO'
        },
        MAX_DOC_REACHED: {
            statusCode: 400,
            customMessage: 'You can upload only 5 docs at a time',
            type: 'MAX_DOC_REACHED'
        },
        INVALID_IMAGE_EXT: {
            statusCode: 400,
            type: 'INVALID_IMAGE_EXT',
            customMessage: 'Invalid Image Extension'
        },
        PENDING_PAYMENT: {
            statusCode: 400,
            customMessage: 'Your previous order payment is pending, please complete the payment before placing a new order',
            type: 'PENDING_PAYMENT'
        },
        PAYMENT_DECLINED: {
            statusCode: 400,
            customMessage: 'The payment was declined!',
            type: 'PAYMENT_DECLINED'
        },
        INVALID_SPLIT_PAYMENT_USER: {
            statusCode: 400,
            customMessage: 'You cannot send your phone number in split payments',
            type: 'INVALID_SPLIT_PAYMENT_USER'
        },
        EQUIPMENT_NOT_UPDATED: {
            statusCode: 400,
            customMessage: 'Equipment should be updated at least once',
            type: 'EQUIPMENT_NOT_UPDATED'
        },
        PEDESTAL_NOT_UPDATED: {
            statusCode: 400,
            customMessage: 'Pedestal should be updated at least once',
            type: 'PEDESTAL_NOT_UPDATED'
        },
        PEDESTAL_NOT_CALIBRATE: {
            statusCode: 400,
            customMessage: 'Pedestal should be calibrated at least once',
            type: 'PEDESTAL_NOT_CALIBRATE'
        },
        EQUIPMENT_NOT_VERIFY: {
            statusCode: 400,
            customMessage: 'Equipment should be verified at least once',
            type: 'EQUIPMENT_NOT_VERIFY'
        },
        MAX_PEDESTAL_ASSIGNED: {
            statusCode: 400,
            customMessage: 'Maximum pedestals assigned to equipment',
            type: 'MAX_PEDESTAL_ASSIGNED'
        },
        INVALID_STRIPE_TOKEN: {
            statusCode: 400,
            customMessage: 'Invalid stripe token provided',
            type: 'INVALID_STRIPE_TOKEN'
        },
        EQUIPMENT_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Equipment Id Not Found',
            type: 'EQUIPMENT_NOT_FOUND'
        },
        ALREADY_ACCEPTED_ORDER: {
            statusCode: 400,
            customMessage: 'This order has already been accepted',
            type: 'ALREADY_ACCEPTED_ORDER'
        },
        MCHU_SUB_MISMATCH: {
            statusCode: 400,
            customMessage: 'The sub user does not belong to your corporation',
            type: 'MCHU_SUB_MISMATCH'
        },
        PHONE_ALREADY_VERIFIED: {
            statusCode: 400,
            customMessage: 'This phone is already verified',
            type: 'PHONE_ALREADY_VERIFIED'
        },
        ALREADY_ACCEPTED_SPLIT_REQUEST: {
            statusCode: 400,
            customMessage: 'You have accepted this request already',
            type: 'ALREADY_ACCEPTED_SPLIT_REQUEST'
        },
        ALREADY_REJECTED_SPLIT_REQUEST: {
            statusCode: 400,
            customMessage: 'You have rejected this request already',
            type: 'ALREADY_REJECTED_SPLIT_REQUEST'
        },
        INVALID_ACCEPTED_SPLIT_REQUEST: {
            statusCode: 400,
            customMessage: 'You are not in this split fare request',
            type: 'INVALID_ACCEPTED_SPLIT_REQUEST'
        },
        OBSOLETE_ERRANDS_ID: {
            statusCode: 400,
            customMessage: 'The errands id is obsolete or not found',
            type: 'OBSOLETE_ERRANDS_ID'
        },
        OBSOLETE_DELIVERY_ID: {
            statusCode: 400,
            customMessage: 'The delivery id is obsolete or not found',
            type: 'OBSOLETE_DELIVERY_ID'
        },
        INVALID_TRANSFORM: {
            statusCode: 400,
            customMessage: 'Cannot update status from CURRENT_STATE to UPDATED_STATE',
            type: 'INVALID_TRANSFORM'
        },
        PROMO_IN_USE: {
            statusCode: 400,
            customMessage: 'This Promo Code is in Use, you cannot edit it at the moment.',
            type: 'PROMO_IN_USE'
        },
        ALREADY_CANCELLED: {
            statusCode: 400,
            customMessage: 'This order has been already cancelled',
            type: 'ALREADY_CANCELLED'
        },
        DB_ERROR: {
            statusCode: 400,
            customMessage: 'DB Error : ',
            type: 'DB_ERROR'
        },
        MAX_EQUIPMENT_ASSIGNED: {
            statusCode: 400,
            customMessage: 'This contractor has already assigned maximum equipments',
            type: 'MAX_EQUIPMENT_ASSIGNED'
        },
        ALREADY_ASSIGNED: {
            statusCode: 400,
            customMessage: 'This equipment is already assigned to other contractor',
            type: 'ALREADY_ASSIGNED'
        },
        ALREADY_ASSIGNED_STATE: {
            statusCode: 400,
            customMessage: 'Booking already assign to another contractor',
            type: 'ALREADY_ASSIGNED_STATE'
        },
        INVALID_ID: {
            statusCode: 400,
            customMessage: 'Invalid Id Provided ',
            type: 'INVALID_ID'
        },
        NOT_CONFIRM: {
            statusCode: 400,
            customMessage: 'You can not confirm it',
            type: 'NOT_CONFIRM'
        },
        INVALID_PEDESTAL_ID: {
            statusCode: 400,
            customMessage: 'These pedestal id are not assigned to the scanned equipment id',
            type: 'INVALID_PEDESTAL_ID'
        },
        MISMATCH_PEDESTAL_ID: {
            statusCode: 400,
            customMessage: 'This pedestal id is not assigned to you',
            type: 'MISMATCH_PEDESTAL_ID'
        },
        MISMATCH_EQUIPMENT_ID: {
            statusCode: 400,
            customMessage: 'This equipment id is not assigned to you',
            type: 'MISMATCH_EQUIPMENT_ID'
        },
        MISMATCH_MASTER_EQUIPMENT_ID: {
            statusCode: 400,
            customMessage: 'This equipment id is not assigned to your master contractor',
            type: 'MISMATCH_MASTER_EQUIPMENT_ID'
        },
        MISMATCH_CONTRACTOR_USERTYPE_ID: {
            statusCode: 400,
            customMessage: 'This  id is not assigned to contractor',
            type: 'MISMATCH_CONTRACTOR_USERTYPE_ID'
        },
        INVALID_VERIFICATION_TOKEN: {
            statusCode: 400,
            type: 'INVALID_VERIFICATION_TOKEN',
            customMessage: 'Invalid Verification Token'
        },
        ALREADY_SPLIT_REQUEST: {
            statusCode: 400,
            customMessage: 'This order has already split request',
            type: 'ALREADY_SPLIT_REQUEST'
        },
        COMPLETED_ORDER: {
            statusCode: 400,
            customMessage: 'This order is in complete state, cannot be cancelled at the moment',
            type: 'COMPLETED_ORDER'
        },
        TIMEOUT_ORDER: {
            statusCode: 400,
            customMessage: 'This order has been timed out, cannot be cancelled at the moment',
            type: 'TIMEOUT_ORDER'
        },
        WRONG_TIME: {
            statusCode: 400,
            customMessage: 'You have selected a past time',
            type: 'WRONG_TIME'
        },
        PICKED_UP_ORDER: {
            statusCode: 400,
            customMessage: 'This order has been picked up by driver, cannot be cancelled at the moment',
            type: 'ORDER_PICKED_UP'
        },
        CANCELLED_ORDER: {
            statusCode: 400,
            customMessage: 'This order has been cancelled already',
            type: 'CANCELLED_ORDER'
        },
        INVALID_ORDER_STATE: {
            statusCode: 400,
            customMessage: 'Order is not in completed state',
            type: 'INVALID_ORDER_STATE'
        },
        INVALID_DELIVERY_SPLIT_STATE: {
            statusCode: 400,
            customMessage: 'This order is either completed or cancelled',
            type: 'INVALID_DELIVERY_SPLIT_STATE'
        },
        INVALID_SKIP_REQUEST: {
            statusCode: 400,
            customMessage: 'The order is not yet completed ',
            type: 'INVALID_SKIP_REQUEST'
        },
        OFF_DUTY: {
            statusCode: 400,
            customMessage: 'You are  Off duty',
            type: 'OFF_DUTY'  
        },
        BOOKING_OFF_DUTY_: {
            statusCode: 400,
            customMessage: 'You cannot go Off duty',
            type: 'OFF_DUTY'
        },
        PAYMENT_ALREADY_COMPLETED: {
            statusCode: 400,
            customMessage: 'The payment has been done already',
            type: 'PAYMENT_ALREADY_COMPLETED'
        },
        INVALID_FEEDBACK_REQUEST: {
            statusCode: 400,
            customMessage: 'The feedback was already given or skipped',
            type: 'INVALID_FEEDBACK_REQUEST'
        },
        INVALID_ADDRESS_ID: {
            statusCode: 400,
            customMessage: 'Invalid Address Id',
            type: 'INVALID_ADDRESS_ID'
        },
        INVALID_ASSOCIATION_REQUEST: {
            statusCode: 400,
            customMessage: 'You do not have any pending association request.',
            type: 'INVALID_ASSOCIATION_REQUEST'
        },
        UNAUTHORIZED_ADDRESS: {
            statusCode: 401,
            customMessage: 'This address id does not belong to you',
            type: 'UNAUTHORIZED_ADDRESS'
        },
        INVALID_ORDER_TYPE: {
            statusCode: 400,
            customMessage: 'Invalid Order Type',
            type: 'INVALID_ORDER_TYPE'
        },
        INVALID_CARD_ID: {
            statusCode: 400,
            customMessage: 'Invalid Card Id',
            type: 'INVALID_CARD_ID'
        },
        MISSING_CARD_ID: {
            statusCode: 400,
            customMessage: 'Missing Card Id',
            type: 'MISSING_CARD_ID'
        },
        APP_ERROR: {
            statusCode: 400,
            customMessage: 'Application Error',
            type: 'APP_ERROR'
        },
        ADDRESS_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Address not found',
            type: 'ADDRESS_NOT_FOUND'
        },
        CARD_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Card not found',
            type: 'CARD_NOT_FOUND'
        },
        DEFAULT_CARD_DELETE_ERROR: {
            statusCode: 400,
            customMessage: 'You cannot delete your default card, please set another card as default to delete this card.',
            type: 'CARD_NOT_FOUND'
        },
        CARD_IN_USE: {
            statusCode: 400,
            customMessage: 'Card is in use',
            type: 'CARD_IN_USE'
        },
        ALREADY_ACTIVE_BOOKING: {
            statusCode: 400,
            customMessage: 'You already have an active order',
            type: 'ALREADY_ACTIVE_BOOKING'
        },
        ALREADY_GIVEN_RATING :{
            statusCode: 400,
            customMessage: 'You have already given rating to this booking',
            type: 'ALREADY_GIVEN_RATING'
        },
        ALREADY_NOT_ACCOUNT_HOLDER: {
            statusCode:400,
            customMessage : 'This user does not exist an account holder already.',
            type : 'ALREADY_NOT_ACCOUNT_HOLDER'
        },
        ALREADY_ACCOUNT_HOLDER: {
            statusCode:400,
            customMessage : 'Already Account Holder',
            type : 'ALREADY_ACCOUNT_HOLDER'
        },
        CANNOT_MAKE_ACCOUNT_HOLDER: {
            statusCode:400,
            customMessage : 'You cannot set the user as default Account Holder',
            type : 'CANNOT_MAKE_ACCOUNT_HOLDER'
        },
        CANNOT_MAKE_ACCOUNT_HOLDER_E: {
            statusCode:412,
            customMessage : 'Admin has been updated your account holder status',
            type : 'CANNOT_MAKE_ACCOUNT_HOLDER'
        },
        BOOKING_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Booking not found',
            type: 'BOOKING_NOT_FOUND'
        },
        BOOKING_EXPIRED: {
            statusCode: 400,
            customMessage: 'Booking is expired ',
            type: 'BOOKING_EXPIRED'
        },
        BOOKING_NOT_COMPLETED: {
            statusCode: 400,
            customMessage: 'Booking not Completed',
            type: 'BOOKING_NOT_FOUND'
        },
        BOOKING_IS_ACTIVE: { 
            statusCode: 400, 
            customMessage: 'Booking is in active state', 
            type: 'BOOKING_IS_INACTIVE'
         },
        SEALS_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Seals not found',
            type: 'SEALS_NOT_FOUND'
        },
        BOOKING_IS_INACTIVE: {
            statusCode: 400,
            customMessage: 'Booking is inactive',
            type: 'BOOKING_IS_INACTIVE'
        },
        SUB_CONTRACTOR_IN_BOOKING: {
            statusCode: 400,
            customMessage: 'Sub contractor is in booking,You cannot block the contractor',
            type: 'SUB_CONTRACTOR_IN_BOOKING'
        },
        SUB_CUSTOMER_IN_BOOKING: {
            statusCode: 400,
            customMessage: 'Sub user is in booking,You cannot block user',
            type: 'SUB_CUSTOMER_IN_BOOKING'
        },
        CONTRACTOR_IN_BOOKING: {
            statusCode: 400,
            customMessage: 'Contractor has an active booking, You cannot block user',
            type: 'CONTRACTOR_IN_BOOKING'
        },
        CONTRACTOR_IN_ACTIVE_BOOKING: {
            statusCode: 400,
            customMessage: 'Contractor has an active booking, You cannot force release',
            type: 'CONTRACTOR_IN_BOOKING'
        },
        CONTRACTOR_NOT_DELETE: {
            statusCode: 400,
            customMessage: 'Contractor has an active booking, You cannot delete user',
            type: 'CONTRACTOR_IN_BOOKING'
        },
        CUSTOMER_IN_BOOKING: {
            statusCode: 400,
            customMessage: 'Customer has an active booking, You cannot block user',
            type: 'CUSTOMER_IN_BOOKING'
        },
        CANNOT_EDIT_BOOKING: {
            statusCode: 400,
            customMessage: 'You can not edit this Booking because contractor has accepted the booking',
            type: 'CANNOT_EDIT_BOOKING'
        },
        IMP_ERROR: {
            statusCode: 500,
            customMessage: 'Implementation Error',
            type: 'IMP_ERROR'
        },
        LAT_LONG_ERROR: {
            statusCode: 400,
            customMessage: 'Both location long and lat should be filled',
            type: 'LAT_LONG_ERROR'
        },
        INVALID_LAT_LONG_ERROR: {
            statusCode: 400,
            customMessage: 'Invalid lat long',
            type: 'INVALID_LAT_LONG_ERROR'
        },
        CARD_ID_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Invalid card id provided',
            type: 'CARD_ID_NOT_FOUND'
        },
        PARENT_CARD_MISSING: {
            statusCode: 400,
            customMessage: 'Your parent customer has not added any card, cannot proceed with the booking',
            type: 'PARENT_CARD_MISSING'
        },
        RECEIPT_IMAGE_ERROR: {
            statusCode: 400,
            customMessage: 'Receipt image is required',
            type: 'RECEIPT_IMAGE_ERROR'
        },
        SIGNATURE_ERROR: {
            statusCode: 400,
            customMessage: 'Signature is required',
            type: 'SIGNATURE_ERROR'
        },
        CANCELLATION_REASON_ERROR: {
            statusCode: 400,
            customMessage: 'Other reason was not specified',
            type: 'CANCELLATION_REASON_ERROR'
        },
        DUPLICATE_CARD: {
            statusCode: 400,
            customMessage: 'Card already exists',
            type: 'DUPLICATE_CARD'
        },
        INVALID_HOURS: {
            statusCode: 400,
            customMessage: 'Invalid Hours',
            type: 'INVALID_HOURS'
        },
        DUPLICATE_ITEM: {
            statusCode: 400,
            customMessage: 'Product Already Exists',
            type: 'DUPLICATE_ITEM'
        },
        LONG_LAT_ERROR: {
            statusCode: 400,
            customMessage: 'Invalid Location Details',
            type: 'LONG_LAT_ERROR'
        },
        APP_VERSION_ERROR: {
            statusCode: 400,
            customMessage: 'One of the latest version or updated version value must be present',
            type: 'APP_VERSION_ERROR'
        },
        RANK_ERROR: {
            statusCode: 500,
            customMessage: 'Unable to update rank of the referrer',
            type: 'RANK_ERROR'
        },
        ACCOUNT_BLOCKED: {
            statusCode: 400,
            customMessage: 'Your account is on Hold, Please contact Conweigh to have your account activated',
            type: 'ACCOUNT_BLOCKED'
        },
        ASSOCIATION_REQUEST: {
            statusCode: 400,
            customMessage: 'Your request for migration is on Hold,Once it is approved by admin you can access your account',
            type: 'ACCOUNT_BLOCKED'
        },
        INVALID_TOKEN: {
            statusCode: 401,
            customMessage: 'Your session has been expired.Please login again.',
            type: 'INVALID_TOKEN'
        },
        PERMISSION_ERROR: {
            statusCode: 401,
            customMessage: "You don't have permission to access this API",
            type: 'PERMISSION_ERROR'
        },
        INVALID_OTP_CODE: {
            statusCode: 400,
            customMessage: 'Please enter valid OTP',
            type: 'INVALID_OTP_CODE'
        },
        INVALID_CARD_DETAILS: {
            statusCode: 400,
            customMessage: 'Invalid Credit/Debit Card Details',
            type: 'INVALID_CARD_DETAILS'
        },
        DEFAULT: {
            statusCode: 400,
            customMessage: 'Error',
            type: 'DEFAULT'
        },
        PHONE_NO_EXIST: {
            statusCode: 400,
            customMessage: 'Phone number already exists',
            type: 'PHONE_NO_EXIST'
        },
        INSPECTION_VAL_EXIST: {
            statusCode: 400,
            customMessage: 'Inspection Value already exists',
            type: 'INSPECTION_VAL_EXIST'
        },
        INSPECTION_ID_NOT_EXIST: {
            statusCode: 400,
            customMessage: 'Inspection Id does not exists',
            type: 'INSPECTION_ID_NOT_EXIST'
        },
        EMAIL_EXIST: {
            statusCode: 400,
            customMessage: 'Email Already exists',
            type: 'EMAIL_EXIST'
        },
        PEDESTAL_EXIST: {
            statusCode: 400,
            customMessage: 'Pedestal with that barcode id already exist.',
            type: 'PEDESTAL_EXIST'
        },
        PEDESTAL_EXIST_IN_OTHER: {
            statusCode: 400,
            customMessage: 'The original assignment cannot be overridden currently as it has been assigned to a contractor.',
            type: 'PEDESTAL_EXIST_IN_OTHER'
        },
        PEDESTAL_EXIST_IN_OTHER_OVER: {
            statusCode: 423,
            customMessage: 'Pedestal is already assign to equipment ID: ',
            type: 'PEDESTAL_EXIST_IN_OTHER_OVER'
        },
        PEDESTAL_MAC_EXIST: {
            statusCode: 400,
            customMessage: 'Pedestal with that MAC Address id already exist.',
            type: 'PEDESTAL_MAC_EXIST'
        },
        PEDESTAL_TYPE_EXIST: {
            statusCode: 400,
            customMessage: 'Pedestal with this type  already exists.',
            type: 'PEDESTAL_TYPE_EXIST' 
        },
        EQUIPMENT_EXIST: {
            statusCode: 400,
            customMessage: 'Equipment with that barcode id already exists.',
            type: 'EQUIPMENT_EXIST'
        },
        PEDESTAL_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Invalid Pedestal Id',
            type: 'PEDESTAL_NOT_FOUND'
        },
        PEDESTAL_IN_USE: {
            statusCode: 400,
            customMessage: 'Cannot delete pedestal as it is in use',
            type: 'PEDESTAL_IN_USE'
        },
        EQUIPMENT_IN_USE: {
            statusCode: 400,
            customMessage: 'Equipment is in use',
            type: 'EQUIPMENT_IN_USE'
        },
        DUPLICATE: {
            statusCode: 400,
            customMessage: 'Duplicate Booking Rates',
            type: 'DUPLICATE'
        },
        GLOBAL_RATES_NOT_SET: {
            statusCode: 400,
            customMessage: 'Please insert global rates first',
            type: 'GLOBAL_RATES_NOT_SET'
        },
        DUPLICATE_VALUES: {
            statusCode: 400,
            customMessage: 'Duplicate values given in the array',
            type: 'DUPLICATE_VALUES'
        },
        DUPLICATE_ADDRESS: {
            statusCode: 400,
            customMessage: 'Address Already Exist',
            type: 'DUPLICATE_ADDRESS'
        },
        DUPLICATE_ARRAY_VALUES: {
            statusCode: 400,
            customMessage: 'Duplicate Values found',
            type: 'DUPLICATE_ARRAY_VALUES'
        },
        DUPLICATE_ARRAY_VALUES_S: {
            statusCode: 400,
            customMessage: 'Please scan the valid QR -Code',
            type: 'DUPLICATE_ARRAY_VALUES_S'
        },
        UNIQUE_CODE_LIMIT_REACHED: {
            statusCode: 400,
            customMessage: 'Cannot Generate Unique Code, All combinations have been used',
            type: 'UNIQUE_CODE_LIMIT_REACHED'
        },
        INVALID_REFERRAL_CODE: {
            statusCode: 400,
            customMessage: 'Invalid Referral Code',
            type: 'INVALID_REFERRAL_CODE'
        },
        FACEBOOK_ID_PASSWORD_ERROR: {
            statusCode: 400,
            customMessage: 'Only one field should be filled at a time, either facebookId or password',
            type: 'FACEBOOK_ID_PASSWORD_ERROR'
        },
        INVALID_EMAIL: {
            statusCode: 400,
            customMessage: 'Invalid Email Address',
            type: 'INVALID_EMAIL'
        },
        PASSWORD_REQUIRED: {
            statusCode: 400,
            customMessage: 'Password is required',
            type: 'PASSWORD_REQUIRED'
        },
        PASSWORD_NOT_MATCH: { 
            statusCode: 400, 
            customMessage: 'Password is incorrect', 
            type: 'PASSWORD_NOT_MATCH' 
        },
        INVALID_COUNTRY_CODE: {
            statusCode: 400,
            customMessage: 'Invalid Country Code, Should be in the format +61',
            type: 'INVALID_COUNTRY_CODE'
        },
        INVALID_ASSOCIATION_TYPE: {
            statusCode: 423,
            customMessage: 'The given contractor is not a Individual Contractor, Association Could not be done',
            type: 'INVALID_ASSOCIATION_TYPE'
        },
        INVALID_ASSOCIATION_TYPE_CUSTOMER: {
            statusCode: 423,
            customMessage: 'The given customer is not a Individual Customer, Association Could not be done',
            type: 'INVALID_ASSOCIATION_TYPE_CUSTOMER'
        },
        INVALID_PHONE_NO_FORMAT: {
            statusCode: 400,
            customMessage: 'Phone no. cannot start with 0',
            type: 'INVALID_PHONE_NO_FORMAT'
        },
        COUNTRY_CODE_MISSING: {
            statusCode: 400,
            customMessage: 'You forgot to enter the country code',
            type: 'COUNTRY_CODE_MISSING'
        },
        INVALID_PHONE_NO: {
            statusCode: 400,
            customMessage: 'Phone No. & Country Code does not match to which the OTP was sent',
            type: 'INVALID_PHONE_NO'
        },
        PHONE_NO_MISSING: {
            statusCode: 400,
            customMessage: 'You forgot to enter the phone no.',
            type: 'PHONE_NO_MISSING'
        },
        NOTHING_TO_UPDATE: {
            statusCode: 400,
            customMessage: 'Nothing to update',
            type: 'NOTHING_TO_UPDATE'
        },
        NOT_FOUND: {
            statusCode: 400,
            customMessage: 'User Not Found',
            type: 'NOT_FOUND'
        },
        BRANCH_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Branch Not Found',
            type: 'BRANCH_NOT_FOUND'
        },
        BRANCH_SAME_EMAIL: {
            statusCode: 400,
            customMessage: 'The given email is already associated with that branch',
            type: 'BRANCH_SAME_EMAIL'
        },
        BRANCH_SAME_HEAD: {
            statusCode: 400,
            customMessage: 'Branch is already having a Head.',
            type: 'BRANCH_SAME_EMAIL'
        },
        HEAD_USER: {
            statusCode: 400,
            customMessage: 'You cannot add sub user, because branch does not having a Head.',
            type: 'HEAD_USER'
        },
        CONTRACTOR_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Contractor Not Found',
            type: 'CONTRACTOR_NOT_FOUND'
        },
        CUSTOMER_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Customer Not Found',
            type: 'CUSTOMER_NOT_FOUND'
        },
        PARENT_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Parent contractor not found',
            type: 'PARENT_NOT_FOUND'
        },
        ADMIN_ASSIGN_ERROR: {
            statusCode: 400,
            customMessage: 'Cannot assign pedestal to sub user',
            type: 'ADMIN_ASSIGN_ERROR'
        },
        MASTER_CONTRACTOR_ASSIGN_ERROR: {
            statusCode: 400,
            customMessage: 'You can only assign pedestal to your sub user',
            type: 'MASTER_CONTRACTOR_ASSIGN_ERROR'
        },
        MASTER_CONTRACTOR_DELETE: {
            statusCode: 400,
            customMessage: 'You can not delete master contractor',
            type: 'MASTER_CONTRACTOR_ASSIGN_ERROR'
        },
        MASTER_CONTRACTOR_UNASSIGN_ERROR: {
            statusCode: 400,
            customMessage: 'You can only unassign pedestal from your sub user',
            type: 'MASTER_CONTRACTOR_DELETE'
        },
        ALREADY_APPROVED: {
            statusCode: 400,
            customMessage: 'This account has already been approved.',
            type: 'ALREADY_APPROVED'
        },
        MASTER_NOT_APPROVED: {
            statusCode: 400,
            customMessage: 'Master account has not been yet approved',
            type: 'MASTER_NOT_APPROVED'
        },
        INVALID_USER_TYPE: {
            statusCode: 400,
            customMessage: 'This is not the master account.',
            type: 'INVALID_USER_TYPE'
        },
        INVALID_DRIVER_ID: {
            statusCode: 400,
            customMessage: 'Invalid Driver Id',
            type: 'INVALID_DRIVER_ID'
        },
        INVALID_ORDER_ID: {
            statusCode: 400,
            customMessage: 'Invalid Order Id',
            type: 'INVALID_ORDER_ID'
        },
        DRIVER_NOT_FREE: {
            statusCode: 400,
            customMessage: 'The selected Driver is already engaged in other order',
            type: 'DRIVER_NOT_FREE'
        },
        DRIVER_OFFLINE: {
            statusCode: 400,
            customMessage: 'The selected Driver is offline or not ready to accept orders',
            type: 'DRIVER_OFFLINE'
        },
        DRIVER_NOT_APPROVED_TO_ALLOCATE: {
            statusCode: 400,
            customMessage: 'The selected Driver is not approved',
            type: 'DRIVER_NOT_APPROVED_TO_ALLOCATE'
        },
        TIMEOUT_ORDER_DRIVER_ALLOCATION: {
            statusCode: 400,
            customMessage: 'This order has been timed out',
            type: 'TIMEOUT_ORDER_DRIVER_ALLOCATION'
        },
        COMPLETED_ORDER_DRIVER_ALLOCATION: {
            statusCode: 400,
            customMessage: 'This order has already been completed',
            type: 'COMPLETED_ORDER_DRIVER_ALLOCATION'
        },
        CANCELLED_ORDER_DRIVER_ALLOCATION: {
            statusCode: 400,
            customMessage: 'This order was cancelled',
            type: 'CANCELLED_ORDER_DRIVER_ALLOCATION'
        },
        INVALID_RESET_PASSWORD_TOKEN: {
            statusCode: 400,
            customMessage: 'Invalid Reset Password Token',
            type: 'INVALID_RESET_PASSWORD_TOKEN'
        },
        INCORRECT_PASSWORD: {
            statusCode: 400,
            customMessage: 'Please enter your correct password',
            type: 'INCORRECT_PASSWORD'
        },
        EMPTY_VALUE: {
            statusCode: 400,
            customMessage: 'Empty String Not Allowed',
            type: 'EMPTY_VALUE'
        },
        PHONE_NOT_MATCH: {
            statusCode: 400,
            customMessage: "Phone No. Doesn't Match",
            type: 'PHONE_NOT_MATCH'
        },
        SAME_PASSWORD: {
            statusCode: 400,
            customMessage: 'Old password and new password cannot be same',
            type: 'SAME_PASSWORD'
        },
        ACTIVE_PREVIOUS_SESSIONS: {
            statusCode: 400,
            customMessage: 'You already have previous active sessions, confirm for flush',
            type: 'ACTIVE_PREVIOUS_SESSIONS'
        },
        PENDING_ASSOCIATION_CONFIRMATION: {
            statusCode: 400,
            customMessage: 'This contractor already has a pending association request',
            type: 'PENDING_ASSOCIATION_CONFIRMATION'
        },
        PENDING_ASSOCIATION_CONFIRMATION_CUSTOMER: {
            statusCode: 400,
            customMessage: 'This customer already has a pending association request',
            type: 'PENDING_ASSOCIATION_CONFIRMATION_CUSTOMER'
        },
        PENDING_DISASSOCIATION_CONFIRMATION: {
            statusCode: 400,
            customMessage: 'You already have a pending disassociation request',
            type: 'PENDING_DISASSOCIATION_CONFIRMATION'
        },
        PENDING_DISASSOCIATION_CONFIRMATION_CUSTOMER: {
            statusCode: 400,
            customMessage: 'You already have a pending disassociation request',
            type: 'PENDING_DISASSOCIATION_CONFIRMATION'
        },
        EMAIL_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Email address already exists.',
            type: 'EMAIL_ALREADY_EXIST'
        },
        VIDEO_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Video already exists.',
            type: 'VIDEO_ALREADY_EXIST'
        },
        NAME_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Name already exists.',
            type: 'NAME_ALREADY_EXIST'
        },
        ZIP_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Zip Code already exists.',
            type: 'ZIP_ALREADY_EXIST'
        },
        NON_SERVICEABLE_ZIP: {
            statusCode: 400,
            customMessage: 'Conweigh does not have any active service providers in that area just yet.' +
            ' We have registered your request and will be in touch to discuss representation in this area',
            type: 'NON_SERVICEABLE_ZIP'
        },
        INDIVIDUAL_CONTRACTOR_ALREADY_EXIST: {
            statusCode: 423,
            customMessage: 'Individual Contractor with that email already exists',
            type: 'INDIVIDUAL_CONTRACTOR_ALREADY_EXIST'
        },
        INDIVIDUAL_USER_ALREADY_EXIST: {
            statusCode: 423,
            customMessage: 'Individual Customer for that email exists',
            type: 'INDIVIDUAL_USER_ALREADY_EXIST'
        },
        ERROR_PROFILE_PIC_UPLOAD: {
            statusCode: 400,
            customMessage: 'Profile pic is not a valid file',
            type: 'ERROR_PROFILE_PIC_UPLOAD'
        },
        PHONE_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'Phone number already exists.',
            type: 'PHONE_ALREADY_EXIST'
        },
        EMAIL_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Please enter your registered email',
            type: 'EMAIL_NOT_FOUND'
        },
        DATA_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'No data found with promo code',
            type: 'DATA_NOT_FOUND'
        },
        UNAPPROVED_ACCOUNT: {
            statusCode: 400,
            customMessage: 'Your account is not yet approved by the admin',
            type: 'UNAPPROVED_ACCOUNT'
        },
        INACTIVE_ACCOUNT: {
            statusCode: 400,
            customMessage: 'You are not allowed to access booking, Please contact conweigh for access the booking',
            type: 'INACTIVE_ACCOUNT'
        },
        DRIVER_NOT_APPROVED: {
            statusCode: 400,
            customMessage: 'Admin has not yet approved the account',
            type: 'DRIVER_NOT_APPROVED'
        },
        NOT_APPROVED: {
            statusCode: 400,
            customMessage: 'You are not yet approved to accept bookings with Conweigh',
            type: 'NOT_APPROVED'
        },
        FACEBOOK_ID_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Facebook Id Not Found',
            type: 'FACEBOOK_ID_NOT_FOUND'
        },
        PHONE_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Phone No. Not Found',
            type: 'PHONE_NOT_FOUND'
        },
        INCORRECT_OLD_PASS: {
            statusCode: 400,
            customMessage: 'Incorrect Old Password',
            type: 'INCORRECT_OLD_PASS'
        },
        UNAUTHORIZED: {
            statusCode: 401,
            customMessage: 'You are not authorized to perform this action',
            type: 'UNAUTHORIZED'
        }, 
        ACTION_NOT_ALLOWED: {
            statusCode: 400,
            customMessage: 'You are not authorized to perform this action',
            type: 'ACTION_NOT_ALLOWED'
        },
        CANNOT_LOGOUT: {
            statusCode: 400,
            customMessage: 'You have an active booking, cannot logout at this moment',
            type: 'CANNOT_LOGOUT'
        },
        ON_DUTY_SEEK_RELEASE: {
            statusCode: 400,
            customMessage: 'You have to go Off Duty for seek release',
            type: 'SEEK_RELEASE'
        },
        ALREADY_ACTIVE_REQUEST: {
            statusCode: 400,
            customMessage: 'You already have an pending request ',
            type: 'ALREADY_ACTIVE_REQUEST'
        },
        PENDING_REQUEST_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Pending Request not found',
            type: 'PENDING_REQUEST_NOT_FOUND'
        },
        PAYMENT_PENDING: {
            statusCode: 406,
            customMessage: 'Payment pending from your side',
            type: 'PAYMENT_PENDING'
        },
        PAYMENT_PENDING_ASSOCIATION: {
            statusCode: 406,
            customMessage: 'Payment is pending from his side, Please try later',
            type: 'PAYMENT_PENDING'
        },
        DEVICE_TYPES_EXIST: {
            statusCode: 400,
            customMessage: 'Device type already exist',
            type: 'DEVICE_TYPES_EXIST'
        },
        CANNOT_OVERRIDDEN: {
            statusCode: 400,
            customMessage: 'The original assignment cannot be overridden currently as it has been assigned to contractor',
            type: 'CANNOT_OVERRIDDEN'
        },
        SAME_EQUIPMENT: {
            statusCode: 400,
            customMessage: 'Overridden cannot be done currently it is in same equipment',
            type: 'SAME_EQUIPMENT'
        },
        IN_BOOKING: {
            statusCode: 400,
            customMessage: 'This action can not be performed, because you have an active booking',
            type: 'IN_BOOKING'
        },
        ASSOCIATION_IN_BOOKING: {
            statusCode: 400,
            customMessage: 'This action can not be performed, because Contractor has an active booking',
            type: 'ASSOCIATION_IN_BOOKING'
        },
        ASSOCIATION_IN_BOOKING_CUSTOMER: {
            statusCode: 400,
            customMessage: 'This action can not be performed, because Customer has an active booking',
            type: 'ASSOCIATION_IN_BOOKING_CUSTOMER'
        },
        DEVICE_VERSION_EXIST: {
            statusCode: 400,
            customMessage: 'Device version already exist',
            type: 'DEVICE_VERSION_EXIST'
        }

    },
    SUCCESS: {
        CREATED: {
            statusCode: 201,
            customMessage: 'Created Successfully',
            type: 'CREATED'
        },
        REGISTERED: {
            statusCode: 201,
            customMessage: 'You are Registered Successfully.',
            type: 'REGISTERED'
        },
        LOGIN: {
            statusCode: 200,
            customMessage: 'Logged In Successfully',
            type: 'LOGIN'
        },
        INVITE: {
            statusCode: 200,
            customMessage: 'Email Sent Successfully',
            type: 'INVITE'
        },
        DEFAULT: {
            statusCode: 200,
            customMessage: 'Success',
            type: 'DEFAULT'
        },
        UPDATED: {
            statusCode: 200,
            customMessage: 'Updated Successfully',
            type: 'UPDATED'
        },
        PASSWORD_UPDATED: {
            statusCode: 200,
            customMessage: 'Password Updated Successfully',
            type: 'PASSWORD_UPDATED'
        },
        LOGOUT: {
            statusCode: 200,
            customMessage: 'Logged Out Successfully',
            type: 'LOGOUT'
        },
        DELETED: {
            statusCode: 200,
            customMessage: 'Deleted Successfully',
            type: 'DELETED'
        },
        CANCEL: {
            statusCode: 200,
            customMessage: 'Your Request has been cancel Successfully',
            type: 'CANCEL'
        }
    }
};

module.exports = STATUS_MSG;
