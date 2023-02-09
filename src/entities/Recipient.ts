import { Channel } from "./Channel";
import { User } from "./User";

export interface Recipient {
  id: string;
  channel_id: string;
  channel: Channel;
  user_id: string;
  user: User;
  closed: boolean;
}
