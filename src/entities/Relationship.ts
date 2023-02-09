import { User } from "./User";
export enum RelationshipType {
  outgoing = 4,
  incoming = 3,
  blocked = 2,
  friends = 1,
}
export interface Relationship {
  id: string;
  from_id: string;
  from: User;
  to_id: string;
  to: User;
  nickname?: string;
  type: RelationshipType;
}
