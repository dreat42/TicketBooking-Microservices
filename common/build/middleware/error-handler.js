"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../errors/custom-error");
const errorHandler = (err, req, res, next) => {
    // if ( err instanceof RequestValidatorError){
    //     return res.status(err.statusCode).send({errors: err.serializeErrors()});
    // }
    // if ( err instanceof DatabaseConnectionError){
    //     console.log("Database Connection error ");
    //     return res.status(err.statusCode).send({errors:err.serializeErrors()});
    // }
    if (err instanceof custom_error_1.CustomError) {
        console.log("Eror====>", err);
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        'message': "Something went wrong"
    });
};
exports.errorHandler = errorHandler;
