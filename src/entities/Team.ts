import { TeamMember } from "./TeamMember";
import { User } from "./User";
export interface Team {
  id: string;
  icon?: string;
  members: TeamMember[];
  name: string;
  owner_user_id: string;
  owner_user: User;
}
