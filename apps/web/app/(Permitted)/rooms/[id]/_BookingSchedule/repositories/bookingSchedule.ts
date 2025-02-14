import { retrieveCompanySetting } from "backend/CompanySetting/queries/retrieveCompanySetting";
export type BookingSchedule = {
  /**
   * it meands when the service start at.
   * @example "1970-01-01T08:00:00"
   */
  openAt: Date;

  /**
   * it meands when the service end at.
   * @example "1970-01-01T20:00:00"
   */
  closedAt: Date;

  /**
   * the duration that users can book the service
   */
  interval: number;
};

/**
 * fetch the bookingSchedule from the server
 * @returns bookingSchedule
 */
export default async function fetchBookingSchedule(
  companyId: string
): Promise<BookingSchedule> {
  const { openAt, closedAt, interval } =
    await retrieveCompanySetting(companyId);
  return {
    openAt,
    closedAt,
    interval: interval.getMinutes(),
  };
}

/**
 * @memo
 * OpeningHours の方が良いかも
 */
