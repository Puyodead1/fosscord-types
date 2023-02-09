import { Channel } from "./Channel";
import { Guild } from "./Guild";
import { User } from "./User";
export interface Invite {
  code: string;
  temporary: boolean;
  uses: number;
  max_uses: number;
  max_age: number;
  created_at: Date;
  expires_at: Date;
  guild_id: string;
  guild: Guild;
  channel_id: string;
  channel: Channel;
  inviter_id?: string;
  inviter: User;
  target_user_id: string;
  target_user?: string;
  target_user_type?: number;
  vanity_url?: boolean;
}
