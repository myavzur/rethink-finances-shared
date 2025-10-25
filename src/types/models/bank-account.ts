import {OperationModel} from "./operation";
import {UserModel} from "./user";

export const BankAccountValidationLimits = {
  NAME_MAX_LENGTH: 60,
  NAME_MIN_LENGTH: 1
} as const;

export const BankAccountSchemaLimits = {
  NAME_MAX_LENGTH: 60
}

export interface BankAccountModel {
  id: string;
  created_at: Date;
  name: string;

  operations: OperationModel[];
  user: UserModel;
}