import {User} from "./user";
import {Operation} from "./operation";

export const CategoryLimits = {
  NAME_MAX_LENGTH: 60,
  NAME_MIN_LENGTH: 1
} as const;

class ICategoryAppearance {
}

export interface Category {
  id: string;
  created_at: Date;
  name: string;
  appearance: ICategoryAppearance;

  operations: Operation[];
  user: User;
}
