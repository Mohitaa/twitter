'use strict';

const likeModel = require("Models/Likes");

const LikeInsert = function(likeinfo, callback){
    console.log("TO BE SAVED >>>>>>>>>>>>>",likeinfo);
    new likeModel(likeinfo).save(function(err,data)
    	{
    	

    			console.log("data "+data);

    		return callback(err,data);
    	}); 
};

module.exports = {
    LikeInsert : LikeInsert
};