import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {


// if ( err instanceof RequestValidatorError){


//     return res.status(err.statusCode).send({errors: err.serializeErrors()});
    
// }


// if ( err instanceof DatabaseConnectionError){
//     console.log("Database Connection error ");

//     return res.status(err.statusCode).send({errors:err.serializeErrors()});
    
// }

if ( err instanceof CustomError){

    console.log("Eror====>",err);
    

    return res.status(err.statusCode).send({errors:err.serializeErrors()});
    
}




    res.status(400).send({
        'message': "Something went wrong"
    });



}