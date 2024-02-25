
import { Publisher, Subjects, TicketCreatedEvent } from '@shaguntickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}