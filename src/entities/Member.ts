/*
    Fosscord: A FOSS re-implementation and extension of the Discord.com backend.
    Copyright (C) 2023 Fosscord and Fosscord Contributors
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import { Guild } from "./Guild";
import { Role } from "./Role";
import { PublicUser, User } from "./User";
export interface Member {
  index: string;
  id: string;
  user: User;
  guild_id: string;
  guild: Guild;
  nick?: string;
  roles: Role[];
  joined_at: Date;
  premium_since?: number;
  deaf: boolean;
  mute: boolean;
  pending: boolean;
  settings: UserGuildSettings;
  last_message_id?: string;
  joined_by: string;
  avatar: string;
  banner: string;
  bio: string;
  theme_colors?: number[];
  pronouns?: string;
  communication_disabled_until: Date;
}
export interface ChannelOverride {
  message_notifications: number;
  mute_config: MuteConfig;
  muted: boolean;
  channel_id: string | null;
}
export interface UserGuildSettings {
  // channel_overrides: {
  // 	channel_id: string;
  // 	message_notifications: number;
  // 	mute_config: MuteConfig;
  // 	muted: boolean;
  // }[];
  channel_overrides: {
    [channel_id: string]: ChannelOverride;
  } | null;
  message_notifications: number;
  mobile_push: boolean;
  mute_config: MuteConfig | null;
  muted: boolean;
  suppress_everyone: boolean;
  suppress_roles: boolean;
  version: number;
  guild_id: string | null;
  flags: number;
  mute_scheduled_events: boolean;
  hide_muted_channels: boolean;
  notify_highlights: 0;
}
export interface MuteConfig {
  end_time: number;
  selected_time_window: number;
}
export type PublicMemberKeys =
  | "id"
  | "guild_id"
  | "nick"
  | "roles"
  | "joined_at"
  | "pending"
  | "deaf"
  | "mute"
  | "premium_since";
export type PublicMember = Omit<Pick<Member, PublicMemberKeys>, "roles"> & {
  user: PublicUser;
  roles: string[]; // only role ids not objects
};
