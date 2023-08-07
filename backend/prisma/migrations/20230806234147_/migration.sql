-- CreateTable
CREATE TABLE "Bread" (
    "bread_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Meat" (
    "meat_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Status" (
    "status_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Optional" (
    "optional_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "order_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "customer_name" TEXT NOT NULL,
    "bread_id" INTEGER NOT NULL,
    "meat_id" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    CONSTRAINT "Order_bread_id_fkey" FOREIGN KEY ("bread_id") REFERENCES "Bread" ("bread_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_meat_id_fkey" FOREIGN KEY ("meat_id") REFERENCES "Meat" ("meat_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status" ("status_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Bread_name_key" ON "Bread"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Meat_name_key" ON "Meat"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Status_name_key" ON "Status"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Optional_name_key" ON "Optional"("name");
