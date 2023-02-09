import { Guild } from "./Guild";
import { Invite } from "./Invite";
import { Message } from "./Message";
import { ReadState } from "./ReadState";
import { Recipient } from "./Recipient";
import { User } from "./User";
import { VoiceState } from "./VoiceState";
import { Webhook } from "./Webhook";
export enum ChannelType {
  GUILD_TEXT = 0,
  DM = 1,
  GUILD_VOICE = 2,
  GROUP_DM = 3,
  GUILD_CATEGORY = 4,
  GUILD_NEWS = 5,
  GUILD_STORE = 6,
  ENCRYPTED = 7,
  ENCRYPTED_THREAD = 8,
  TRANSACTIONAL = 9,
  GUILD_NEWS_THREAD = 10,
  GUILD_PUBLIC_THREAD = 11,
  GUILD_PRIVATE_THREAD = 12,
  GUILD_STAGE_VOICE = 13,
  DIRECTORY = 14,
  GUILD_FORUM = 15,
  TICKET_TRACKER = 33,
  KANBAN = 34,
  VOICELESS_WHITEBOARD = 35,
  CUSTOM_START = 64,
  UNHANDLED = 255,
}
export interface Channel {
  id: string; // forum composed of IM threads
  created_at: Date;
  name?: string;
  icon?: string | null;
  type: ChannelType;
  recipients?: Recipient[];
  last_message_id?: string;
  guild_id?: string;
  guild: Guild;
  parent_id: string;
  parent?: Channel;
  owner_id?: string;
  owner: User;
  last_pin_timestamp?: number;
  default_auto_archive_duration?: number;
  position?: number;
  permission_overwrites?: ChannelPermissionOverwrite[];
  video_quality_mode?: number;
  bitrate?: number;
  user_limit?: number;
  nsfw: boolean;
  rate_limit_per_user?: number;
  topic?: string;
  invites?: Invite[];
  retention_policy_id?: string;
  messages?: Message[];
  voice_states?: VoiceState[];
  read_states?: ReadState[];
  webhooks?: Webhook[];
  flags: number;
  default_thread_rate_limit_per_user: number;
}
export interface ChannelPermissionOverwrite {
  allow: string;
  deny: string;
  id: string;
  type: ChannelPermissionOverwriteType;
}
export enum ChannelPermissionOverwriteType {
  role = 0,
  member = 1,
  group = 2,
}
