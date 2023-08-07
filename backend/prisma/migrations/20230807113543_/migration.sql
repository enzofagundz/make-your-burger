/*
  Warnings:

  - Added the required column `optional` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "order_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "customer_name" TEXT NOT NULL,
    "bread_id" INTEGER NOT NULL,
    "meat_id" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    "optional" TEXT NOT NULL,
    CONSTRAINT "Order_bread_id_fkey" FOREIGN KEY ("bread_id") REFERENCES "Bread" ("bread_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_meat_id_fkey" FOREIGN KEY ("meat_id") REFERENCES "Meat" ("meat_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status" ("status_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("bread_id", "created_at", "customer_name", "meat_id", "order_id", "status_id", "updated_at") SELECT "bread_id", "created_at", "customer_name", "meat_id", "order_id", "status_id", "updated_at" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
