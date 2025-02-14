import fetchBookingSchedule from "../repositories/bookingSchedule";
import dateTime, { DateTime } from "../../../../../_types/DateTime";

/**
 * A function that returns opening hours ticks
 * @returns {Promise<DateTime[]>} openingHoursTicks
 */
export async function getOpeningHoursTicks(): Promise<DateTime[]> {
  const { openAt, closedAt } = await fetchBookingSchedule("28c664a5-3094-4b9f-b902-b667571c1b7a");

  let current = dateTime(openAt.toISOString())
  const end = dateTime(closedAt.toISOString());

  const times = [];
  while (current.isBefore(end)) {
    times.push(current);
    current = current.addMinute(60);
  }

  return [...times, end];
}
