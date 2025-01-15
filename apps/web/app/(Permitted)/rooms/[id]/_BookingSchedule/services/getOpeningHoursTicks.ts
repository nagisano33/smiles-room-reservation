import dayjs from "dayjs";
import fetchBookingSchedule from "../repositories/bookingSchedule";

/**
 * A function that returns opening hours ticks
 * @returns openingHoursTicks
 */
export async function getOpeningHoursTicks() {
  const { openAt, closedAt } = await fetchBookingSchedule();

  let current = dayjs(openAt);
  const end = dayjs(closedAt);

  if (!current.isValid() || !end.isValid()) {
    throw new Error();
  }

  const times = [];
  while (current.isBefore(end) || current.isSame(end)) {
    times.push(current.format("HH:mm"));
    current = current.add(60, "minute");
  }

  return times;
}
