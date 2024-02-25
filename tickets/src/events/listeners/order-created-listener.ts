import { Message } from "node-nats-streaming";

import {Listener,  OrderCreatedEvent, Subjects } from "@shaguntickets/common";

import { queueGroupName } from './queue-group-name';
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";


export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject: Subjects.OrderCreated=Subjects.OrderCreated;
    queueGroupName=queueGroupName;
  
   async onMessage(data:OrderCreatedEvent['data'],msg:Message) {
     const ticket = await Ticket.findById(data.ticket.id);

    if(!ticket){
      throw new Error('Ticket not found');
    }
    
    ticket.set({orderId:data.id});

    await ticket.save();
    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      orderId: ticket.orderId,
      userId: ticket.userId,
      price: ticket.price,
      title: ticket.title,
      version: ticket.version,
    });
 
    msg.ack();
  
   
    }
}