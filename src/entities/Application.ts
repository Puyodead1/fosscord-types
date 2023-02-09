import { Team } from "./Team";
import { User } from "./User";
export interface Application {
  id: string;
  name: string;
  icon?: string;
  description: string;
  summary: string;
  type?: object;
  hook: boolean;
  bot_public?: boolean;
  bot_require_code_grant?: boolean;
  verify_key: string;
  owner: User;
  flags: number;
  redirect_uris: string[];
  rpc_application_state: number;
  store_application_state: number;
  verification_state: number;
  interactions_endpoint_url?: string;
  integration_public: boolean;
  integration_require_code_grant: boolean;
  discoverability_state: number;
  discovery_eligibility_flags: number;
  bot?: User;
  tags?: string[];
  cover_image?: string;
  install_params?: {
    scopes: string[];
    permissions: string;
  };
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  team?: Team;
}
export interface ApplicationCommand {
  id: string;
  application_id: string;
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
}
export interface ApplicationCommandOption {
  type: ApplicationCommandOptionType;
  name: string;
  description: string;
  required?: boolean;
  choices?: ApplicationCommandOptionChoice[];
  options?: ApplicationCommandOption[];
}
export interface ApplicationCommandOptionChoice {
  name: string;
  value: string | number;
}
export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
}
export interface ApplicationCommandInteractionData {
  id: string;
  name: string;
  options?: ApplicationCommandInteractionDataOption[];
}
export interface ApplicationCommandInteractionDataOption {
  name: string;
  value?: unknown;
  options?: ApplicationCommandInteractionDataOption[];
}
