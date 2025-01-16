import fetchBookingSchedule from "../repositories/bookingSchedule";
import dateTime, { DateTime } from "../../../../../_types/DateTime";

/**
 * A function that returns opening hours ticks
 * @returns {Promise<DateTime[]>} openingHoursTicks
 */
export async function getOpeningHoursTicks(): Promise<DateTime[]> {
  const { openAt, closedAt } = await fetchBookingSchedule();

  let current = dateTime(openAt)
  const end = dateTime(closedAt);

  const times = [];
  while (current.isBefore(end)) {
    times.push(current);
    current = current.addMinute(60);
  }

  return [...times, end];
}
