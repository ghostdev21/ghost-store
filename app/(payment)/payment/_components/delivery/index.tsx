"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Delivery() {

    const [select, setSelect] = useState(false)

  return (
    <div>
        <h2 className="text-3xl my-3">Delivery</h2>
      <div onClick={() => setSelect(!select)} className={`flex w-full items-center border-[1px] justify-between rounded-md py-5 px-4 ${select ? "border-blue-500" : ""}`}>
        <div className="flex items-center gap-4">
          <Input className="rounded-full w-5 h-5 overflow-hidden" checked={select} type="checkbox" />
          <span className="text-sm ">FakeStandar</span>
        </div>
        <span className="text-sm text-zinc-600">120.90 MNX</span>
      </div>

      <Button disabled={!select} className="mt-3" variant="default">
        Continuar
      </Button>
    </div>
  );
}
