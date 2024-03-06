"use client"

import { cn } from "@/lib/utils";


export default function MaxWidthWrapper({ className, children }) {
  return (
    <>
        <div className={cn("mx-auto w-full max-w-screen px-2.5 md:px-20")}>
          {children}
        </div>
    </>
  );
}
