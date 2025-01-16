import dateTime, { DateTime } from "../../../../../_types/DateTime";
import fetchBookingSchedule from "../repositories/bookingSchedule";

/**
 * check if the time is the opening time
 * @param {DateTime} param0 A date time object to check
 * @returns {Promise<boolean>} the time is whether open time or not
 */
export async function isOpeningTime({ time }: DateTime): Promise<boolean> {
  const { openAt } = await fetchBookingSchedule();

  const _openAt = dateTime(openAt);
  return time === _openAt.time;
}
