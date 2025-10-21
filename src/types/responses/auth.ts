import {User} from "../entities";

export interface AUthResponse {
  user: Omit<User, "email_hash" | "password">
  access_token: string
}
