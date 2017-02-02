'use strict';

const mysqlConfig = {
	host :               'localhost' ,
	database :        	'mamta', 
	password :        'root' ,
	user :               'root' ,
	port :               3306 ,
}

const mongoConfig = {
	host : 'localhost',
	database : 'erptest',
	password : '',
	user : '',
	port : 27017,
	uri : "mongodb://localhost/erptest"
}

module.exports = {
    dbConfig : mongoConfig
}