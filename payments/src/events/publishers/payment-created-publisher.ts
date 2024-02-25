import { Subjects, Publisher, PaymentCreatedEvent } from '@shaguntickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
