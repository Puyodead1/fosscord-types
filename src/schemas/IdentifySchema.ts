import { ActivitySchema } from "./ActivitySchema";

export interface IdentifySchema {
  token: string;
  properties: {
    // bruh discord really uses $ in the property key, so we need to double prefix it, because instanceOf treats $ (prefix) as a optional key
    os?: string;
    os_atch?: string;
    browser?: string;
    device?: string;
    $os?: string;
    $browser?: string;
    $device?: string;
    browser_user_agent?: string;
    browser_version?: string;
    os_version?: string;
    referrer?: string;
    referring_domain?: string;
    referrer_current?: string;
    referring_domain_current?: string;
    release_channel?: "stable" | "dev" | "ptb" | "canary";
    client_build_number?: number;
    client_event_source?: string;
    client_version?: string;
    system_locale?: string;
  };
  intents?: bigint; // discord uses a Integer for bitfields we use bigints tho. | instanceOf will automatically convert the Number to a BigInt
  presence?: ActivitySchema;
  compress?: boolean;
  large_threshold?: number;
  largeThreshold?: number;
  shard?: [bigint, bigint];
  guild_subscriptions?: boolean;
  capabilities?: number;
  client_state?: {
    guild_hashes?: unknown;
    highest_last_message_id?: string | number;
    read_state_version?: number;
    user_guild_settings_version?: number;
    user_settings_version?: number;
    useruser_guild_settings_version?: number;
    private_channels_version?: number;
    guild_versions?: unknown;
    api_code_version?: number;
  };
  clientState?: {
    guildHashes?: unknown;
    highestLastMessageId?: string | number;
    readStateVersion?: number;
    userGuildSettingsVersion?: number;
    useruserGuildSettingsVersion?: number;
    guildVersions?: unknown;
    apiCodeVersion?: number;
  };
  v?: number;
}
