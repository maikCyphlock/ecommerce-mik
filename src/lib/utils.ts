import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ensureStartsWith(str: string, char: string): string {
  return str.startsWith(char) ? str : `${char}${str}`;
}
