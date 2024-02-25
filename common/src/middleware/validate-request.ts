import express, { Request, Response, NextFunction } from 'express';
import { RequestValidatorError } from '../errors/request-validator-error';
import { validationResult } from 'express-validator';

export const validateRequest = (

    req: Request,
    res: Response,
    next: NextFunction
) => {


    var errors = validationResult(req);


    if (!errors.isEmpty()) {

      throw new RequestValidatorError(errors.array());
    }

    next();



}