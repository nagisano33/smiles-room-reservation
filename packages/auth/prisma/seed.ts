import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 例えば、User モデルに初期データを投入する例
  await prisma.account.deleteMany(); // 既存データのクリア（必要に応じて）

  await prisma.account.create({
    data: {
      id: "28c664a5-3094-4b9f-b902-b667571c1b7b",
      name: "Alice",
      password: "password1",
    },
  });

  await prisma.account.create({
    data: {
      name: "Bob",
      password: "password2",
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
