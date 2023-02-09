import { User } from "../entities";
export type UserTokenData = {
  user: User;
  decoded: {
    id: string;
    iat: number;
  };
};
