-- DropForeignKey
ALTER TABLE "CompanySetting" DROP CONSTRAINT "CompanySetting_companyId_fkey";

-- AddForeignKey
ALTER TABLE "CompanySetting" ADD CONSTRAINT "CompanySetting_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
