-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "job" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "image" TEXT,
    "bio" TEXT NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);
