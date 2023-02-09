import { Activity, Status } from "../interfaces";

export interface ActivitySchema {
  afk?: boolean;
  status: Status;
  activities?: Activity[];
  since?: number; // unix time (in milliseconds) of when the client went idle, or null if the client is not idle
}
