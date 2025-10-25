import {UserModel} from "../models";

export interface AuthResponse {
  user: Pick<UserModel, "id" | "created_at" | "nickname">
  access_token: string
}
