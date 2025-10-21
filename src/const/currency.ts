import {ValueOf} from "@/types";

export const OperationType = {
  EXPENSE: 'expense',
  INCOME: 'income',
} as const;

export type IOperationType = ValueOf<typeof OperationType>;

/** ISO 4217 */
export const Currency = {
  RUB: 'rub',
  USD: 'usd',
  EUR: 'eur',
} as const;

export type ICurrency = ValueOf<typeof Currency>
