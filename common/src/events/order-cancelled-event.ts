import { Subjects } from "./subject";

export interface OrderCancelledEvent{
    subject:Subjects.OrderCancelled;

    data:{
        id:string;
        version:number;
        ticket:{
            id:string;
        }
    }
}