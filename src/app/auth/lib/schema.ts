import {z, ZodString} from "zod";

const emailField: ZodString = z.string().email("Incorrect email")
const passwordField: ZodString = z.string().min(8, "Мin 8 characters")
const userNameField: ZodString = z.string().min(4, "Min 4 characters")

export const LoginSchema = z.object({
  email: z.string().email("Incorrect email"),
  password: z.string().min(8, "Мin 8 characters"),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  userName: userNameField,
  email: emailField,
  password: passwordField,
})

export type RegisterFormData = z.infer<typeof RegisterSchema>;