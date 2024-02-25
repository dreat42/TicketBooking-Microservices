import { Publisher,  OrderCreatedEvent, Subjects } from "@shaguntickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
subject: Subjects.OrderCreated=Subjects.OrderCreated;

}