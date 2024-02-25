import { Publisher,  OrderCancelledEvent, Subjects } from "@shaguntickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
subject: Subjects.OrderCancelled=Subjects.OrderCancelled;

}