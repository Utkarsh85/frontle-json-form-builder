var lib= require('./lib/lib');
var middleware= require('./lib/middleware');
var decode= require('./lib/decode');

module.exports={
	encode: lib,
	middleware:middleware,
	decode:decode
}