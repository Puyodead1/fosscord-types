import { Channel } from "./Channel";
import { User } from "./User";
export interface ReadState {
  id: string;
  channel_id: string;
  channel: Channel;
  user_id: string;
  user: User;
  last_message_id: string;
  public_ack: string;
  notifications_cursor: string;
  last_pin_timestamp?: Date;
  mention_count: number;
  // @Column({ nullable: true })
  // TODO: derive this from (last_message_id=notifications_cursor=public_ack)=true
  manual: boolean;
}
