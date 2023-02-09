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
import { InteractionType } from "../interfaces/Interaction";
import { Application } from "./Application";
import { Attachment } from "./Attachment";
import { Channel } from "./Channel";
import { Guild } from "./Guild";
import { Member } from "./Member";
import { Role } from "./Role";
import { Sticker } from "./Sticker";
import { User } from "./User";
import { Webhook } from "./Webhook";
export enum MessageType {
  DEFAULT = 0,
  RECIPIENT_ADD = 1,
  RECIPIENT_REMOVE = 2,
  CALL = 3,
  CHANNEL_NAME_CHANGE = 4,
  CHANNEL_ICON_CHANGE = 5,
  CHANNEL_PINNED_MESSAGE = 6,
  GUILD_MEMBER_JOIN = 7,
  USER_PREMIUM_GUILD_SUBSCRIPTION = 8,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 9,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 10,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 11,
  CHANNEL_FOLLOW_ADD = 12,
  ACTION = 13,
  GUILD_DISCOVERY_DISQUALIFIED = 14,
  GUILD_DISCOVERY_REQUALIFIED = 15,
  ENCRYPTED = 16,
  REPLY = 19,
  APPLICATION_COMMAND = 20,
  ROUTE_ADDED = 41,
  ROUTE_DISABLED = 42,
  SELF_COMMAND_SCRIPT = 43,
  ENCRYPTION = 50,
  CUSTOM_START = 63,
  UNHANDLED = 255,
}
export interface Message {
  id: string;
  channel_id?: string;
  channel: Channel;
  guild_id?: string;
  guild?: Guild;
  author_id?: string;
  author?: User;
  member_id?: string;
  member?: Member;
  webhook_id?: string;
  webhook?: Webhook;
  application_id?: string;
  application?: Application;
  content?: string;
  timestamp: Date;
  edited_timestamp?: Date;
  tts?: boolean;
  mention_everyone?: boolean;
  mentions: User[];
  mention_roles: Role[];
  mention_channels: Channel[];
  sticker_items?: Sticker[];
  attachments?: Attachment[];
  embeds: Embed[];
  reactions: Reaction[];
  nonce?: string;
  pinned?: boolean;
  type: MessageType;
  activity?: {
    type: number;
    party_id: string;
  };
  flags?: string;
  message_reference?: {
    message_id: string;
    channel_id?: string;
    guild_id?: string;
  };
  referenced_message?: Message;
  interaction?: {
    id: string;
    type: InteractionType;
    name: string;
    user_id: string; // the user who invoked the interaction
  };
  components?: MessageComponent[];
}
export interface MessageComponent {
  type: number;
  style?: number;
  label?: string;
  emoji?: PartialEmoji;
  custom_id?: string;
  url?: string;
  disabled?: boolean;
  components: MessageComponent[];
}
export enum MessageComponentType {
  Script = 0,
  ActionRow = 1,
  Button = 2,
}
export interface Embed {
  title?: string; //title of embed
  type?: EmbedType; // type of embed (always "rich" for webhook embeds)
  description?: string; // description of embed
  url?: string; // url of embed
  timestamp?: Date; // timestamp of embed content
  color?: number; // color code of the embed
  footer?: {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
  }; // footer object	footer information
  image?: EmbedImage; // image object	image information
  thumbnail?: EmbedImage; // thumbnail object	thumbnail information
  video?: EmbedImage; // video object	video information
  provider?: {
    name?: string;
    url?: string;
  }; // provider object	provider information
  author?: {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
  }; // author object	author information
  fields?: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
}
export enum EmbedType {
  rich = "rich",
  image = "image",
  video = "video",
  gifv = "gifv",
  article = "article",
  link = "link",
}
export interface EmbedImage {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}
export interface Reaction {
  count: number;
  //// not saved in the database // me: boolean; // whether the current user reacted using this emoji
  emoji: PartialEmoji;
  user_ids: string[];
}
export interface PartialEmoji {
  id?: string;
  name: string;
  animated?: boolean;
}
export interface AllowedMentions {
  parse?: ("users" | "roles" | "everyone")[];
  roles?: string[];
  users?: string[];
  replied_user?: boolean;
}
