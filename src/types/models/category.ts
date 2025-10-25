import {UserModel} from "./user";
import {OperationModel} from "./operation";
import {IIconAppearance} from "../../const";

export const CategoryValidationLimits = {
  NAME_MAX_LENGTH: 60,
  NAME_MIN_LENGTH: 1
} as const;


export const CategorySchemaLimits = {
  NAME_MAX_LENGTH: 60,
}

export interface CategoryModel {
  id: string;
  created_at: Date;
  name: string;
  appearance: IIconAppearance;

  operations: OperationModel[];
  user: UserModel;
}
