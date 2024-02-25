
import express, { Request, Response } from 'express';
import { User } from '../models/user';
import { body, validationResult } from 'express-validator';
import jwt  from 'jsonwebtoken';

import { DatabaseConnectionError , validateRequest } from '@shaguntickets/common';


const router = express.Router();


router.post(
  '/api/users/signup',
  [
    body('email')
      .isEmail()
      .withMessage("Email must be valid"),
    body('password')
      .trim()
      .notEmpty()
      .withMessage("Password must be valid"),

  ],
  validateRequest,
  async (req: Request, res: Response) => {


 

    const { email, password } = req.body;


    const existingUser = await User.findOne({ email });


    if (existingUser) {

   //   throw new BadRequestError('Email in use');

   

     res.send('Email in use');
    }


    const user = User.build({ email, password });
    await user.save();


   const userJwt = jwt.sign({
    id:user.id,
    email:user.email

   },process.env.JWT_KEY!);


   req.session= {
    jwt:userJwt
   };


    res.status(201).send(user);

  });


export { router as signupRouter };

