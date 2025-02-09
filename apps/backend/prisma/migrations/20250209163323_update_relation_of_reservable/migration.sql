-- DropForeignKey
ALTER TABLE "Reservable" DROP CONSTRAINT "Reservable_companyId_fkey";

-- AddForeignKey
ALTER TABLE "Reservable" ADD CONSTRAINT "Reservable_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
