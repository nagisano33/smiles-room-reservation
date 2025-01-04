import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @see {@link https://ui.shadcn.com/docs/installation/manual#:~:text=Copy-,Add%20a%20cn%20helper,-lib/utils.ts}
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
