/*
  Warnings:

  - Added the required column `title` to the `wifis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wifis" ADD COLUMN     "title" TEXT NOT NULL;
