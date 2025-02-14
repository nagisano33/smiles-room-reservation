"use server";
import { client } from "../../client";

export async function addReservable(companyId: string) {
  return await client.company.update({
    where: { id: companyId },
    data: {
      reservables: {
        create: {
          name: "Room A"
        }
      }
    },
    include: {
      reservables: true
    }
  })
}