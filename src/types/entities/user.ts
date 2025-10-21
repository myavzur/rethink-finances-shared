import {Operation} from "./operation";
import {Category} from "./category";

export const UserLimits = {
  EMAIL_MIN_LENGTH: 5,
  EMAIL_MAX_LENGTH: 50,
  NICKNAME_MIN_LENGTH: 1,
  NICKNAME_MAX_LENGTH: 60,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 80
} as const;

export interface User {
  id: string;
  created_at: Date;
  email_hash: string;
  password: string;
  nickname: string;

  operations: Operation[];
  categories: Category[];
}