import { ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function variants(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
