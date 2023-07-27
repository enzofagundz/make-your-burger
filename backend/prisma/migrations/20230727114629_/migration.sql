/*
  Warnings:

  - You are about to drop the column `optional_id` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_optional_id_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `optional_id`,
    ADD COLUMN `optional_json` JSON NULL;
