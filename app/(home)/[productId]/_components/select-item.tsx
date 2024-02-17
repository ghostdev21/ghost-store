"use client";

import { Toggle } from "@/components/ui/toggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/utils/create-url";
import { memo } from "react";

interface SelectItemProps {
  title: string;
  values: string[];
  urlParam: string;
}

 function SelectItem({
  title,
  values,
  urlParam,
}: SelectItemProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full">
      <h3>{title}</h3>
      {
        values.map((value) => {
          const optionSearchParams = new URLSearchParams(
            searchParams.toString()
          );

          optionSearchParams.set(urlParam, value);
          const optionUrl = createUrl(pathname, optionSearchParams);
          const isActive = searchParams.get(urlParam) === value;
          return (
            <Toggle
            key={value}
              pressed={isActive}
              onClick={() => router.replace(optionUrl, { scroll: false })}
              className="px-7"
            >
                {
                    value.includes("#") ? 
                    <div
                      className={`rounded-full w-5 h-5 p-2 border-[1px]`}
                      style={{ backgroundColor: value }}
                    />
                    :
                    value
                }
            </Toggle>
          );
        })}

    </div>
  );
}

export default memo(SelectItem);