import { getOpeningHoursTicks } from "../_BookingSchedule/services/getOpeningHoursTicks";
import { retrieveReservable } from "backend/retrieveReservable";

export async function TimeTable() {
  const times = await getOpeningHoursTicks();
  const company = await retrieveReservable("28c664a5-3094-4b9f-b902-b667571c1b7a");
  console.log(company);

  console.log(times);
  /**
   * @idea
   * 全部出しておいて、営業時間によっては hidden するのはどうだろう
   */
  return (
    <div className="grid grid-cols-[4em_16px_1fr]">
      <div className="grid grid-rows-[repeat(24,8em)] col-start-1">
        {times.map(({ time, isoString }) => (
          <div
            key={isoString}
            className="
                relative w-full grid place-items-center
                "
          >
            <div className="absolute -top-3">
              <span className="text-gray-500 text-sm">{time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid col-start-2 row-span-full border-t">
        {times.slice(0, -1).map(({ isoString }) => (
          <div key={isoString} className="border-b h-32" />
        ))}
      </div>

      <div className="grid col-start-3 row-span-full border-t border-x">
        {times.slice(0, -1).map(({ isoString }) => (
          <div key={isoString} className="border-b h-32" />
        ))}
      </div>

      {/* 予約単位が 15m, 30m, 60m の 3 つのバリエーションを用意する */}
      <div className="grid grid-rows-[repeat(24,4em)] col-start-3 row-span-full">
        <div className="row-start-2 row-end-5 pr-4">
          <div className="h-full bg-gray-500/40 rounded-xl p-4">
            <span className="text-sm">8:30 ~ 11:00 予約不可</span>
          </div>
        </div>
        <div className="row-start-5 row-end-6 pr-4">
          <div className="h-full rounded-xl p-4 hover:bg-blue-500/40 hover:after:content-['予約可能']"></div>
        </div>
      </div>
    </div>
  );
}
