// https://github.com/discordjs/discord.js/blob/master/src/util/Permissions.js
// Apache License Version 2.0 Copyright 2015 - 2021 Amish Shah
// @fc-license-skip

import { Channel, Guild, Member, Role } from "../entities";
import { BitField, BitFlag } from "./BitField";

export type PermissionResolvable =
  | bigint
  | number
  | Permissions
  | PermissionResolvable[]
  | PermissionString;

type PermissionString = keyof typeof Permissions.FLAGS;

// BigInt doesn't have a bit limit (https://stackoverflow.com/questions/53335545/whats-the-biggest-bigint-value-in-js-as-per-spec)
// const CUSTOM_PERMISSION_OFFSET = BigInt(1) << BigInt(64); // 27 permission bits left for discord to add new ones

export class Permissions extends BitField {
  static FLAGS = {
    CREATE_INSTANT_INVITE: BitFlag(0),
    KICK_MEMBERS: BitFlag(1),
    BAN_MEMBERS: BitFlag(2),
    ADMINISTRATOR: BitFlag(3),
    MANAGE_CHANNELS: BitFlag(4),
    MANAGE_GUILD: BitFlag(5),
    ADD_REACTIONS: BitFlag(6),
    VIEW_AUDIT_LOG: BitFlag(7),
    PRIORITY_SPEAKER: BitFlag(8),
    STREAM: BitFlag(9),
    VIEW_CHANNEL: BitFlag(10),
    SEND_MESSAGES: BitFlag(11),
    SEND_TTS_MESSAGES: BitFlag(12),
    MANAGE_MESSAGES: BitFlag(13),
    EMBED_LINKS: BitFlag(14),
    ATTACH_FILES: BitFlag(15),
    READ_MESSAGE_HISTORY: BitFlag(16),
    MENTION_EVERYONE: BitFlag(17),
    USE_EXTERNAL_EMOJIS: BitFlag(18),
    VIEW_GUILD_INSIGHTS: BitFlag(19),
    CONNECT: BitFlag(20),
    SPEAK: BitFlag(21),
    MUTE_MEMBERS: BitFlag(22),
    DEAFEN_MEMBERS: BitFlag(23),
    MOVE_MEMBERS: BitFlag(24),
    USE_VAD: BitFlag(25),
    CHANGE_NICKNAME: BitFlag(26),
    MANAGE_NICKNAMES: BitFlag(27),
    MANAGE_ROLES: BitFlag(28),
    MANAGE_WEBHOOKS: BitFlag(29),
    MANAGE_EMOJIS_AND_STICKERS: BitFlag(30),
    USE_APPLICATION_COMMANDS: BitFlag(31),
    REQUEST_TO_SPEAK: BitFlag(32),
    // TODO: what is permission 33?
    MANAGE_THREADS: BitFlag(34),
    USE_PUBLIC_THREADS: BitFlag(35),
    USE_PRIVATE_THREADS: BitFlag(36),
    USE_EXTERNAL_STICKERS: BitFlag(37),

    /**
     * CUSTOM PERMISSIONS ideas:
     * - allow user to dm members
     * - allow user to pin messages (without MANAGE_MESSAGES)
     * - allow user to publish messages (without MANAGE_MESSAGES)
     */
    // CUSTOM_PERMISSION: BigInt(1) << BigInt(0) + CUSTOM_PERMISSION_OFFSET
  };
}

export type PermissionCache = {
  channel?: Channel | undefined;
  member?: Member | undefined;
  guild?: Guild | undefined;
  roles?: Role[] | undefined;
  user_id?: string;
};
