import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      // 共通の項目があれば追加する
    },
  },
  plugins: [],
};
export default config;
