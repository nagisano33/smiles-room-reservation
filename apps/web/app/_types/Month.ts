const _month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octorber",
  "November",
  "December",
] as const;

export type Month = (typeof _month)[number];

export default function getMonthIndex(month: Month) {
  return _month.indexOf(month);
}
