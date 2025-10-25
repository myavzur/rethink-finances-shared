import {OperationModel} from "./operation";
import {UserModel} from "./user";

export const AccountValidationLimits = {
  NAME_MAX_LENGTH: 60,
  NAME_MIN_LENGTH: 1
} as const;

export const AccountSchemaLimits = {
  NAME_MAX_LENGTH: 60
}

export interface AccountModel {
  id: string;
  created_at: Date;
  name: string;

  operations: OperationModel[];
  user: UserModel;
}