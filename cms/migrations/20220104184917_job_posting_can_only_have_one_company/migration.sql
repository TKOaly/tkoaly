/*
  Warnings:

  - You are about to drop the `_Company_jobs` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[jobs]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_Company_jobs" DROP CONSTRAINT "_Company_jobs_A_fkey";

-- DropForeignKey
ALTER TABLE "_Company_jobs" DROP CONSTRAINT "_Company_jobs_B_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "jobs" UUID;

-- DropTable
DROP TABLE "_Company_jobs";

-- CreateIndex
CREATE UNIQUE INDEX "Company_jobs_key" ON "Company"("jobs");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_jobs_fkey" FOREIGN KEY ("jobs") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;
