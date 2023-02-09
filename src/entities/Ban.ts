import { Guild } from "./Guild";
import { User } from "./User";
export interface Ban {
  id: string;
  user_id: string;
  user: User;
  guild_id: string;
  guild: Guild;
  executor_id: string;
  executor: User;
  ip: string;
  reason?: string;
}
