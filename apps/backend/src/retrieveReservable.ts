import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function retrieveReservable(companyId: string) {
  return prisma.company.findUnique({
    where: { id: companyId },
    include: {
      companySetting: true,
      reservables: true,
    },
  });
}

prisma.company.update({
  where: { id: "28c664a5-3094-4b9f-b902-b667571c1b7a" },
  data: {
    reservables: {
      createMany: {
        data: [{ name: "Room A" }, { name: "Room B" }, { name: "Room C" }],
      },
    },
  },
});
