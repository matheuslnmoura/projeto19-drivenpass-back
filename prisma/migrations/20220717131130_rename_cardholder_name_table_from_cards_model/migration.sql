/*
  Warnings:

  - You are about to drop the column `cardholdernName` on the `cards` table. All the data in the column will be lost.
  - Added the required column `cardholderName` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "cardholdernName",
ADD COLUMN     "cardholderName" TEXT NOT NULL;
