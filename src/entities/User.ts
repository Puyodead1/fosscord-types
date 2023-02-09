import { BitField } from "../util/BitField";
import { ConnectedAccount } from "./ConnectedAccount";
import { Relationship } from "./Relationship";
import { Session } from "./Session";
import { UserSettings } from "./UserSettings";
export enum PublicUserEnum {
  username,
  discriminator,
  id,
  public_flags,
  avatar,
  accent_color,
  banner,
  bio,
  bot,
  premium_since,
  premium_type,
  theme_colors,
  pronouns,
}
export type PublicUserKeys = keyof typeof PublicUserEnum;
export enum PrivateUserEnum {
  flags,
  mfa_enabled,
  email,
  phone,
  verified,
  nsfw_allowed,
  premium,
  premium_type,
  purchased_flags,
  premium_usage_flags,
  disabled,
}
export type PrivateUserKeys = keyof typeof PrivateUserEnum | PublicUserKeys;
// Private user data that should never get sent to the client
export type PublicUser = Pick<User, PublicUserKeys>;
export type UserPublic = Pick<User, PublicUserKeys>;
export interface UserPrivate extends Pick<User, PrivateUserKeys> {
  locale: string;
}
export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  accent_color?: number;
  banner?: string;
  theme_colors?: number[];
  pronouns?: string;
  phone?: string;
  desktop: boolean;
  mobile: boolean;
  premium: boolean;
  premium_type: number;
  bot: boolean;
  bio: string;
  system: boolean;
  nsfw_allowed: boolean;
  mfa_enabled: boolean;
  totp_secret?: string;
  totp_last_ticket?: string;
  created_at: Date;
  premium_since: Date;
  verified: boolean;
  disabled: boolean;
  deleted: boolean;
  email?: string;
  flags: string;
  public_flags: number;
  purchased_flags: number;
  premium_usage_flags: number;
  rights: string;
  sessions: Session[];
  relationships: Relationship[];
  connected_accounts: ConnectedAccount[];
  data: {
    valid_tokens_since: Date; // all tokens with a previous issue date are invalid
    hash?: string; // hash of the password, salt is saved in password (bcrypt)
  };
  fingerprints: string[];
  settings: UserSettings;
  extended_settings: string;
}
export class UserFlags extends BitField {
  static FLAGS = {
    DISCORD_EMPLOYEE: BigInt(1) << BigInt(0),
    PARTNERED_SERVER_OWNER: BigInt(1) << BigInt(1),
    HYPESQUAD_EVENTS: BigInt(1) << BigInt(2),
    BUGHUNTER_LEVEL_1: BigInt(1) << BigInt(3),
    MFA_SMS: BigInt(1) << BigInt(4),
    PREMIUM_PROMO_DISMISSED: BigInt(1) << BigInt(5),
    HOUSE_BRAVERY: BigInt(1) << BigInt(6),
    HOUSE_BRILLIANCE: BigInt(1) << BigInt(7),
    HOUSE_BALANCE: BigInt(1) << BigInt(8),
    EARLY_SUPPORTER: BigInt(1) << BigInt(9),
    TEAM_USER: BigInt(1) << BigInt(10),
    TRUST_AND_SAFETY: BigInt(1) << BigInt(11),
    SYSTEM: BigInt(1) << BigInt(12),
    HAS_UNREAD_URGENT_MESSAGES: BigInt(1) << BigInt(13),
    BUGHUNTER_LEVEL_2: BigInt(1) << BigInt(14),
    UNDERAGE_DELETED: BigInt(1) << BigInt(15),
    VERIFIED_BOT: BigInt(1) << BigInt(16),
    EARLY_VERIFIED_BOT_DEVELOPER: BigInt(1) << BigInt(17),
    CERTIFIED_MODERATOR: BigInt(1) << BigInt(18),
    BOT_HTTP_INTERACTIONS: BigInt(1) << BigInt(19),
  };
}
