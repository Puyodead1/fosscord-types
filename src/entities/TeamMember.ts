import { Team } from "./Team";
import { User } from "./User";
export enum TeamMemberState {
  INVITED = 1,
  ACCEPTED = 2,
}
export interface TeamMember {
  id: string;
  membership_state: TeamMemberState;
  permissions: string[];
  team_id: string;
  team: Team;
  user_id: string;
  user: User;
}
