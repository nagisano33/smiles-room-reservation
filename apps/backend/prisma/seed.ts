import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 例えば、User モデルに初期データを投入する例
  await prisma.company.deleteMany(); // 既存データのクリア（必要に応じて）

  await prisma.company.create({
    data: {
      name: "Alice",
      reservables: {
        create: [
          {
            name: "reservable1a",
          },
          {
            name: "reservable1a",
          },
        ],
      },
    },
  });

  await prisma.company.create({
    data: {
      name: "Bob",
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
