import {UserModel} from "./user";
import {CategoryModel} from "./category";
import {ICurrency, IOperationType} from "../../const";
import {AccountModel} from "./account";

export const OperationValidationLimits = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 60
};

export const OperationSchemaLimits = {
  NAME_MAX_LENGTH: 60
}

export interface OperationModel {
  id: string;
  created_at: Date;
  name: string;
  type: IOperationType;
  amount_currency: ICurrency;
  amount_value: number;

  account: AccountModel;
  category: CategoryModel;
  user: UserModel;
}
