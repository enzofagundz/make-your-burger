/*
  Warnings:

  - Added the required column `optional_id` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `optional_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_optional_id_fkey` FOREIGN KEY (`optional_id`) REFERENCES `Optional`(`optional_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
