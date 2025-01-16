import fetchBookingSchedule from "../repositories/bookingSchedule";
import dateTime from "../../../../../_types/DateTime";

/**
 * A function that returns opening hours ticks
 * @returns openingHoursTicks
 */
export async function getOpeningHoursTicks() {
  const { openAt, closedAt } = await fetchBookingSchedule();

  let current = dateTime(openAt)
  const end = dateTime(closedAt);

  const times = [];
  while (current.isBefore(end) || current.isSame(end)) {
    times.push(current);
    current = current.addMinute(60);
  }

  return times;
}
