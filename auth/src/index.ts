import express from 'express';

import {json} from 'body-parser';


import mongoose from 'mongoose';

import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/currentuser';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup'; 

import { errorHandler , NotFoundError } from '@shaguntickets/common';


const app= express();

app.set('trust proxy',true);
app.use(json());

app.use(
   cookieSession({
      signed:false,
      secure:true
   })
)

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
 
app.all('*', () => {
    throw new NotFoundError();
});

app.use(errorHandler);

const start = async () =>{

   if(!process.env.JWT_KEY)
   {
      throw new Error('JWT_KEY must be defined');
   }
   if(!process.env.MONGO_URI)
   {
      throw new Error('MONGO_URI must be defined');
   }

   try{

      await mongoose.connect(process.env.MONGO_URI)

      console.log("Connected to MongoDB")
   } catch (err){
      console.error(err);
      
   }
}



app.listen(3000,()=>{


   console.log('Listening on port 3000 !!!!')
})


start();






