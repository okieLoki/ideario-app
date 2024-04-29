import Image from "next/image";
import { Licorice } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Licorice({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <p className={cn("text-3xl", font.className)}>
      Ideario
      </p>
    </div>
  )
}