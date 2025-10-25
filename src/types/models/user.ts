import {OperationModel} from "./operation";
import {CategoryModel} from "./category";
import {AccountModel} from "./account";

export const UserValidationLimits = {
  EMAIL_MIN_LENGTH: 5,
  EMAIL_MAX_LENGTH: 50,
  NICKNAME_MIN_LENGTH: 1,
  NICKNAME_MAX_LENGTH: 60,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 80
} as const;

export const UserSchemaLimits = {
  EMAIL_MAX_LENGTH: 50,
  NICKNAME_MAX_LENGTH: 60,
  PASSWORD_MAX_LENGTH: 255
}

export interface UserModel {
  id: string;
  created_at: Date;
  email_hash: string;
  password: string;
  nickname: string;

  operations: OperationModel[];
  categories: CategoryModel[];
  accounts: AccountModel[];
}