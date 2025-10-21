import {ICurrency, IOperationType} from "../../const";

export interface CreateOperationBody {
  name: string;
  type: IOperationType;
  amount_currency: ICurrency;
  amount_value: number;
  category_id: string;
}

export type UpdateOperationBody = Omit<Partial<CreateOperationBody>, "category_id">
