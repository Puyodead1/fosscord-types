import { Application } from "./Application";
import { Channel } from "./Channel";
import { Guild } from "./Guild";
import { User } from "./User";
export enum WebhookType {
  Incoming = 1,
  ChannelFollower = 2,
  Application = 3,
}
export interface Webhook {
  id: string;
  type: WebhookType;
  name?: string;
  avatar?: string;
  token?: string;
  guild_id: string;
  guild: Guild;
  channel_id: string;
  channel: Channel;
  application_id: string;
  application: Application;
  user_id: string;
  user: User;
  source_guild_id: string;
  source_guild: Guild;
}
