import React from "react";

import { cn } from "@/lib/utils";
import { bricolage_grotesque } from "@/utils/fonts";

type HeroButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function HeroButton({ children, ...props }: HeroButtonProps) {
  return (
    <button
      className={cn(
        `h-10 max-sm:h-10 text-sm px-5 max-sm:px-5 py-1 max-sm:py-0 
        ${bricolage_grotesque} inline-flex items-center justify-center 
        rounded-xl font-semibold transition-all duration-200 
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 
        relative cursor-pointer border-0 
        bg-neutral-900 text-primary-foreground hover:brightness-90 
        dark:bg-white dark:text-black`
      )}
      {...props}
    >
      {children}
    </button>
  );
}
