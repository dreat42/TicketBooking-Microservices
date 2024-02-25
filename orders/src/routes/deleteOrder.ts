import express, { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError, NotFoundError, OrderStatus, requireAuth ,validateRequest } from '@shaguntickets/common';
import { Order } from '../models/order';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';

import { natsWrapper } from '../nats-wrapper';

const router = express.Router();


router.delete('/api/orders/:orderId',async (req:Request,res:Response) =>{

    const {orderId } = req.body;

    const order = await Order.findById(orderId).populate('ticket');

   if(!order){
    throw new NotFoundError();
   }  

   if(order.userId !== req.currentUser!.id){
    throw new NotAuthorizedError();
   }

   order.status = OrderStatus.Cancelled;
   await order.save();

   new OrderCancelledPublisher(natsWrapper.client).publish({
    id: order.id,
    version: order.version,
    ticket: {
      id: order.ticket.id,
    },
  });

   res.send(204).send(order);
});

export { router as deleteOrdersRouter };
