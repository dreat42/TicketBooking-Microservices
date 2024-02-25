
import {Subjects , TicketCreatedEvent,  Publisher} from '@shaguntickets/common';



export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject:Subjects.TicketCreated = Subjects.TicketCreated;
  
}
