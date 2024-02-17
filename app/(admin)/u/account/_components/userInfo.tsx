"use client";

import { useAuthContext } from "@/context/auth-context";

export default function UserInfo() {
  const { user } = useAuthContext();

  return (
    <>
      <h1 className="text-3xl font-medium">Hola {user?.displayName}</h1>
      <span>Iniciaste sesion como {user?.email}</span>
    </>
  );
}
