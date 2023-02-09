import { User } from "./User";
export type PublicConnectedAccount = Pick<
  ConnectedAccount,
  "name" | "type" | "verified"
>;
export interface ConnectedAccount {
  id: string;
  user_id: string;
  user: User;
  access_token: string;
  friend_sync: boolean;
  name: string;
  revoked: boolean;
  show_activity: boolean;
  type: string;
  verified: boolean;
  visibility: number;
}
