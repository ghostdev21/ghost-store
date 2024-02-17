"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logOut } from "@/services/auth-services";

export default function Sidebar() {
  return (
    <div className="max-w-72 p-2 w-full">
      <h3 className="text-3xl font-medium">Dashboard</h3>
      <ul className="flex mt-5 flex-col gap-3 text-base text-zinc-500">
        <li>
          <Link href="/u/account">General</Link>
        </li>
        <li>
          <Link href="/u/account/orders">ordenes</Link>
        </li>
        <li>
          <Link href="/u/account/profile">perfil</Link>
        </li>
        <Button
          className="mt-2"
          onClick={logOut}
        >
          cerrar sesion
        </Button>
      </ul>
    </div>
  );
}
