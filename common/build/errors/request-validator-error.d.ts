import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
export declare class RequestValidatorError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): {
        message: any;
        field: ValidationError;
    }[];
}
