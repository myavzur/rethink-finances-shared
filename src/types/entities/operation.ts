import {User} from "./user";
import {ValueOf} from "../";
import {Category} from "./category";
import {ICurrency, IOperationType} from "@/const";

export const OperationLimits = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 60
};

export interface Operation {
  id: string;
  created_at: Date;
  name: string;
  type: IOperationType;
  amount_currency: ICurrency;
  amount_value: number;

  category: Category;
  user: User;
}
