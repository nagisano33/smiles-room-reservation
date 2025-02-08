import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function retrieveReservable(companyId: string) {
  return prisma.company.findUnique({
    where: { id: companyId },
    select: {
      id: true,
      name: true,
      reservables: {
        select: {
          id: true,
          name: true
        },
        orderBy: {
          createdAt: 'asc'
        }
      },
    }
  })
} 