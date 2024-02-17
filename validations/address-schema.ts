import { z } from "zod";

const countries = ["US", "MX"] as const

export const addressSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe tener mas de tres caracteres" })
    .max(20, {
      message: "El nombre debe de tener menos de 20 caracteres",
    }),
  last_name: z
    .string()
    .min(4, {
      message: "El apellido debe tener mas de 4 caracteres",
    })
    .max(20, {
      message: "El apellido debe tener menos de 20 caracteres",
    }),
  company: z.string(),
  postal_code: z
    .string()
    .max(5, {
      message: "Maximo 5 caracteres",
    }),
  city: z.string(),
  country: z.enum(countries, {
    errorMap: () => ({message: "Elige un país"})
  }),
  state: z.string(),
  email: z.string().email({
    message: "Debes tener un correo",
  }),
  phone: z.string(),
});
