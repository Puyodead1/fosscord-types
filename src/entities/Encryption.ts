export interface SecuritySettings {
  id: string;
  guild_id: string;
  channel_id: string;
  encryption_permission_mask: number;
  allowed_algorithms: string[];
  current_algorithm: string;
  used_since_message: string;
}
