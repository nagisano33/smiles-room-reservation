import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 例えば、User モデルに初期データを投入する例
  await prisma.company.deleteMany(); // 既存データのクリア（必要に応じて）

  await prisma.company.create({
    data: {
      id: "28c664a5-3094-4b9f-b902-b667571c1b7a",
      name: "Alice",
      companySetting: {
        create: {
          openAt: "1970-01-01T08:00:00+09:00",
          closedAt: "1970-01-01T20:00:00+09:00",
        }
      },
      reservables: {
        create: [
          {
            name: "reservable1a",
          },
          {
            name: "reservable2a",
          },
        ],
      },
    },
  });

  await prisma.company.create({
    data: {
      name: "Bob",
      companySetting: {
        create: {
          openAt: "1970-01-02T00:00:00+09:00",
          closedAt: "1970-01-03T00:00:00+09:00",
        }
      },
      reservables: {
        create: [
          {
            name: "reservable1b",
          },
          {
            name: "reservable2b",
          },
        ],
      },
    },
  });

  console.log("シードデータの投入が完了しました。");
}

main()
  .catch((err) => {
    console.error("エラーが発生しました:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
