import { Metadata } from "next";
import UserInfo from "./_components/userInfo";

export const metadata: Metadata = {
  title: "Cuenta",
  description: "Cuenta del usuario y configuraciones",
};

export default async function AccountPage() {


  return (
    <div className="w-full">
      <div className="flex gap-10 items-center border-b-[1px] pb-5">
        <UserInfo />
      </div>
      <div className="flex gap-7 mt-7">
        <div className="flex flex-col gap-3">
          <span className="text-base font-semibold">Perfil</span>
          <span className="text-2xl">75% completado</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-base font-semibold">Direccion</span>
          <span className="text-2xl">Sin direccion</span>
        </div>
      </div>
      <h2>Ordenes recientes</h2>
      <div className="mt-9">
        <div className="w-full px-3 py-3 rounded-md flex justify-between border-[1px] ">
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold">Date placed</span>
            <span>Sun Jan 21 2024</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold">Order number</span>
            <span>#2345</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold">Total</span>
            <span>1233.34 MNX</span>
          </div>
        </div>
      </div>
    </div>
  );
}
