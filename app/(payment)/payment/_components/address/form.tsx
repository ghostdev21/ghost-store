"use client";

import { buttonVariants } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "@/validations/address-schema";

type Inputs = {
  name: string;
  last_name: string;
  address: string;
  company: string;
  number: string;
  city: string;
  state: string;
  email: string;
  phone: string;
};

export default function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(addressSchema) });

  console.log(errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="flex flex-wrap gap-5 justify-start mt-8">
          <input
            type="text"
            {...register("name")}
            id="name"
            placeholder="nombre"
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            type="text"
            {...register("last_name")}
            id="last_name"
            placeholder="apellido"
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            type="text"
            {...register("address")}
            id="address"
            placeholder="direccion"
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            type="text"
            {...register("company")}
            id="company"
            placeholder="compañia"
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            type="number"
            {...register("postal_code")}
            id="postal_code"
            placeholder="codigo postal"
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            type="text"
            {...register("city")}
            id="city"
            placeholder="ciudad"
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <select
            defaultChecked
            {...register("country")}
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="MX">México</option>
            <option value="US">Estados Unidos</option>
          </select>
          <input
            type="text"
            {...register("state")}
            id="state"
            placeholder="estado / provincia"
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="correo"
            className="lg:max-w-xs flex h-10 w-full rounded-md border border-input bg-primary-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            type="number"
            {...register("phone")}
            id="phone"
            placeholder="telefono"
            className="lg:max-w-xs flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 w-full bg-primary-foreground"
          />
        </div>
        <button type="submit" className={`${buttonVariants()} mt-5`}>
          Continuar comprando
        </button>
      </form>
    </div>
  );
}
