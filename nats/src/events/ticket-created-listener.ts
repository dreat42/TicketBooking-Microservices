import { Message } from 'node-nats-streaming';

import {Subjects , TicketCreatedEvent, Listener} from  '@shaguntickets/common';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject:Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'payments-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data!', data);

    msg.ack();
  }
}
