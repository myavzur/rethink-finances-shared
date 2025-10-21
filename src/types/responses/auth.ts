import {User} from "../entities";

export interface AuthResponse {
  user: Pick<User, "id" | "created_at" | "nickname">
  access_token: string
}
