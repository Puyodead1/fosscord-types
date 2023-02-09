import { User } from ".";
import { Guild } from "./Guild";
export interface Emoji {
  id: string;
  animated: boolean;
  available: boolean;
  guild_id: string;
  guild: Guild;
  user_id: string;
  user: User;
  managed: boolean;
  name: string;
  require_colons: boolean;
  roles: string[];
  groups: string[];
}
