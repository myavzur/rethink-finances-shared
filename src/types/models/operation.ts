import {UserModel} from "./user";
import {CategoryModel} from "./category";
import {ICurrency, IOperationType} from "../../const";

export const OperationValidationLimits = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 60
};

export const OperationSchemaLimits = {
  NAME_MAX_LENGTH: 60,
}

export interface OperationModel {
  id: string;
  created_at: Date;
  name: string;
  type: IOperationType;
  amount_currency: ICurrency;
  amount_value: number;

  category: CategoryModel;
  user: UserModel;
}
