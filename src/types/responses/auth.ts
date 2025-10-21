import {User} from "../entities";

export interface AuthResponse {
  user: Omit<User, "email_hash" | "password">
  access_token: string
}
