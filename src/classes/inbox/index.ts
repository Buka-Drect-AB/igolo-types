import { DocumentSchema, NotificationRestriction, NotificationType } from "../..";
import { Model } from "../model";

export type Inbox = {
  actor: string | null;
  to: string;
  readAt?: number;
  message: string;
  restriction: NotificationRestriction;
  metadata?: {
    body?: string;
    image?: string;
    destination?: string;
  };
  type: NotificationType;
} & DocumentSchema;

export class InboxModel extends Model<Inbox> {

}