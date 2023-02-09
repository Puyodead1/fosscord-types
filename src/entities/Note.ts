import { User } from "./User";
export interface Note {
  id: string;
  owner: User;
  target: User;
  content: string;
}
