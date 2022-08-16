import { object, string, number, date, InferType } from "yup";

const languageRegex = /^[\w@.]+$/;

export const signInSchema = object({
  login: string()
    .trim()
    .lowercase()
    .matches(languageRegex, "Только латиница")
    .min(5, "Должно быть не менее пяти символов")
    .required("Поле является обязательным для заполнения"),
  email: string()
    .email("Должен содержать `@` и домен `.`")
    .matches(languageRegex, "Только латиница")
    .min(5, "Должно быть не меньше пяти символов"),
  password: string()
    .matches(languageRegex, "Только латиница")
    .min(5, "Должно быть не меньше пяти символов")
    .required("Поле является обязательным для заполнения"),
});

export type User = InferType<typeof signInSchema>;
