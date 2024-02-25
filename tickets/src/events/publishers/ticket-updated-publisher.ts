import {Publisher , Subjects , TicketUpdatedEvent} from '@shaguntickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject:Subjects.TicketUpdated = Subjects.TicketUpdated;
     
}