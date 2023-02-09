import { User } from "./User";
export interface BackupCode {
  id: string;
  user: User;
  code: string;
  consumed: boolean;
  expired: boolean;
}
