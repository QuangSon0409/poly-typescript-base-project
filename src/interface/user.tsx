import * as Yup from "yup";
export interface ISignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ISignIn {
  email: string;
  password: string;
}

export const SignUpSchema = Yup.object({
  name: Yup.string().required("không được để trống"),
  email: Yup.string().email("không").required("không được "),
  password: Yup.string().min(6).required("không được"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")])
    .required("không được"),
});
export type SignUpForm = Yup.InferType<typeof SignUpSchema>;

export const SignInSchema = Yup.object({
  email: Yup.string().email("không").required("không được "),
  password: Yup.string().min(6).required("không được"),
});
export type SignInForm = Yup.InferType<typeof SignInSchema>;
