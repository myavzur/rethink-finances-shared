import {IIconAppearance} from "@/const";

export interface CreateCategoryBody {
  name: string;
  appearance: IIconAppearance;
}

export type UpdateCategoryBody = Partial<CreateCategoryBody>;
