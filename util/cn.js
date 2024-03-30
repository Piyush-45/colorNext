import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  cn
};
