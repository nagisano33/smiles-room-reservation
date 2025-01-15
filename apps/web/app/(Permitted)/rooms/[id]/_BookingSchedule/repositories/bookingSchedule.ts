export type BookingSchedule = {
  /**
   * it meands when the service start at.
   * @example "1970-01-01T08:00:00"
   */
  openAt: string;

  /**
   * it meands when the service end at.
   * @example "1970-01-01T20:00:00"
   */
  closedAt: string;

  /**
   * the duration that users can book the service
   */
  duration: number;
}

/**
 * fetch the bookingSchedule from the server
 * @returns bookingSchedule
 */
export default async function fetchBookingSchedule(): Promise<BookingSchedule> {
  /**
   * @todo
   * data fetch
   */
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    openAt: "1970-01-01T08:00:00",
    closedAt: "1970-01-01T20:00:00",
    duration: 30,
  };
}
