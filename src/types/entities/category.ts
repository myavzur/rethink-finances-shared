import {User} from "./user";
import {Operation} from "./operation";
import {IIconAppearance} from "@/const";

export const CategoryLimits = {
  NAME_MAX_LENGTH: 60,
  NAME_MIN_LENGTH: 1
} as const;

export interface Category {
  id: string;
  created_at: Date;
  name: string;
  appearance: IIconAppearance;

  operations: Operation[];
  user: User;
}
