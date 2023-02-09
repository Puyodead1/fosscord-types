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
import { Channel, Emoji, Guild, Member, Role, Sticker } from "../entities";
export interface IReadyGuildDTO {
    application_command_counts?: {
        1: number;
        2: number;
        3: number;
    }; // ????????????
    channels: Channel[];
    data_mode: string; // what is this
    emojis: Emoji[];
    guild_scheduled_events: unknown[]; // TODO
    id: string;
    large: boolean | undefined;
    lazy: boolean;
    member_count: number | undefined;
    members: Member[];
    premium_subscription_count: number | undefined;
    properties: {
        name: string;
        description?: string | null;
        icon?: string | null;
        splash?: string | null;
        banner?: string | null;
        features: string[];
        preferred_locale?: string | null;
        owner_id?: string | null;
        application_id?: string | null;
        afk_channel_id?: string | null;
        afk_timeout: number | undefined;
        system_channel_id?: string | null;
        verification_level: number | undefined;
        explicit_content_filter: number | undefined;
        default_message_notifications: number | undefined;
        mfa_level: number | undefined;
        vanity_url_code?: string | null;
        premium_tier: number | undefined;
        premium_progress_bar_enabled: boolean;
        system_channel_flags: number | undefined;
        discovery_splash?: string | null;
        rules_channel_id?: string | null;
        public_updates_channel_id?: string | null;
        max_video_channel_users: number | undefined;
        max_members: number | undefined;
        nsfw_level: number | undefined;
        hub_type?: unknown | null; // ????
    };
    roles: Role[];
    stage_instances: unknown[];
    stickers: Sticker[];
    threads: unknown[];
    version: string;
}
export interface ReadyGuildDTO {
    application_command_counts?: {
        1: number;
        2: number;
        3: number;
    };
    channels: Channel[];
    data_mode: string;
    emojis: Emoji[];
    guild_scheduled_events: unknown[];
    id: string;
    large: boolean | undefined;
    lazy: boolean;
    member_count: number | undefined;
    members: Member[];
    premium_subscription_count: number | undefined;
    properties: {
        name: string;
        description?: string | null;
        icon?: string | null;
        splash?: string | null;
        banner?: string | null;
        features: string[];
        preferred_locale?: string | null;
        owner_id?: string | null;
        application_id?: string | null;
        afk_channel_id?: string | null;
        afk_timeout: number | undefined;
        system_channel_id?: string | null;
        verification_level: number | undefined;
        explicit_content_filter: number | undefined;
        default_message_notifications: number | undefined;
        mfa_level: number | undefined;
        vanity_url_code?: string | null;
        premium_tier: number | undefined;
        premium_progress_bar_enabled: boolean;
        system_channel_flags: number | undefined;
        discovery_splash?: string | null;
        rules_channel_id?: string | null;
        public_updates_channel_id?: string | null;
        max_video_channel_users: number | undefined;
        max_members: number | undefined;
        nsfw_level: number | undefined;
        hub_type?: unknown | null; // ????
    };
    roles: Role[];
    stage_instances: unknown[];
    stickers: Sticker[];
    threads: unknown[];
    version: string;
}