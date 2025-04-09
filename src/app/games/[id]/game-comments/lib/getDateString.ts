import {MONTH_NAMES} from "@/lib/constants";

export const getDateString = (str: string) => {
  const date = new Date(str);
  return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`
}