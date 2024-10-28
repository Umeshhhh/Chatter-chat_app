/*
  Warnings:

  - You are about to drop the column `chatId` on the `mssg` table. All the data in the column will be lost.
  - You are about to drop the `Chats` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `globalID` to the `mssg` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `mssg` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_userId_fkey";

-- DropForeignKey
ALTER TABLE "mssg" DROP CONSTRAINT "mssg_chatId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastName" DROP NOT NULL;

-- AlterTable
CREATE SEQUENCE mssg_id_seq;
ALTER TABLE "mssg" DROP COLUMN "chatId",
ADD COLUMN     "globalID" TEXT NOT NULL,
ADD COLUMN     "sender" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('mssg_id_seq');
ALTER SEQUENCE mssg_id_seq OWNED BY "mssg"."id";

-- DropTable
DROP TABLE "Chats";

-- CreateTable
CREATE TABLE "Global" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Global_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mssg" ADD CONSTRAINT "mssg_globalID_fkey" FOREIGN KEY ("globalID") REFERENCES "Global"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
