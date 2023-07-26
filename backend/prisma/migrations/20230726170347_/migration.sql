/*
  Warnings:

  - You are about to drop the column `customer_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customer_name` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_customer_id_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `customer_id`,
    ADD COLUMN `customer_name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `customer`;
