import {User} from "./user";
import {ValueOf} from "../";
import {Currency, IOperationType} from "@/const";
import {Category} from "./category";

export const OperationLimits = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 60
};

export type ICurrency = ValueOf<typeof Currency>;

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
