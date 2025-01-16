import dayjs from "dayjs";
import getMonthIndex, { Month } from "./Month";

export type DateTime = {
  /**
   * A formatted string. `YYYY-MM-DD`
   */
  date: string;

  /**
   * A formatted string. `HH:mm`
   */
  time: string;

  /**
   * add minute and return new object
   * @param {number} minute number to add
   * @returns added DateTime object
   */
  addMinute: (minute: number) => DateTime;

  /**
   * check if this is before the target
   * @param {DateTime} target A DateTime object to compare
   * @returns {boolean}
   * - true: before
   * - false: not before
   */
  isBefore: (target: DateTime) => boolean;

  /**
   * check if this object and the target object are same
   * @param {DateTime} target A DateTime object to compare
   * @returns {boolean}
   * - true: same
   * - false: not same
   */
  isSame: (target: DateTime) => boolean;

  /**
   * generate a new DateTime object that is set the date
   * @param {number} year A year
   * @param {Month} month A month
   * @param {number} date A date
   * @returns {DateTime} new DateTime object
   */
  setDate: (year: number, month: Month, date: number) => DateTime;

  /**
   * generate formatted datetime string
   * @param {string} template
   * @returns formatted string
   */
  format: (template?: string) => string;

  /**
   * ISO8601 string
   */
  isoString: string;
};

/**
 * generate an object that contains the date string, the time string, and function to format
 * @param {string} isoStringDateTime - datetime string to generate this object
 * @returns {BookingDateTime} an object that contains the date string, the time string, and function to format
 */
export default function dateTime(isoStringDateTime: string): DateTime {
  const _dateTime = dayjs(isoStringDateTime);
  if (!_dateTime.isValid()) {
    throw new Error("`time` is invalid");
  }

  function addMinute(minute: number): DateTime {
    const dt = _dateTime.add(minute, "minute");
    return dateTime(dt.toISOString());
  }

  function isBefore(target: DateTime): boolean {
    const _target = dayjs(target.isoString);
    return _dateTime.isBefore(_target);
  }

  function isSame(target: DateTime): boolean {
    const _target = dayjs(target.isoString);
    return _dateTime.isSame(_target);
  }

  function setDate(year: number, month: Month, date: number) {
    const _date = _dateTime.year(year).month(getMonthIndex(month)).date(date);
    return dateTime(_date.toISOString());
  }

  return {
    date: _dateTime.format("YYYY-MM-DD"),
    time: _dateTime.format("HH:mm"),
    isoString: _dateTime.toISOString(),
    addMinute,
    isBefore,
    isSame,
    setDate,
    format: _dateTime.format,
  };
}
