import { ISignIn, ISignUp } from "../interface/user";
import instance from "./instance";

export const signUp = (user: ISignUp) => {
  return instance.post("/signup", user);
};
export const signIn = (user: ISignIn) => {
  return instance.post("/signin", user);
};
