import { Guild } from "./Guild";
export interface Role {
  id: string;
  guild_id: string;
  guild: Guild;
  color: number;
  hoist: boolean;
  managed: boolean;
  mentionable: boolean;
  name: string;
  permissions: string;
  position: number;
  icon?: string;
  unicode_emoji?: string;
  tags?: {
    bot_id?: string;
    integration_id?: string;
    premium_subscriber?: boolean;
  };
}
