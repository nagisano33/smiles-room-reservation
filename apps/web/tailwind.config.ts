import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config"; // 共通の設定を@repo/tailwind-configからimport

const config = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  presets: [sharedConfig],
} satisfies Pick<Config, "content" | "presets">;

export default config;