"use client";
import { Button } from "@repo/ui/Material/button";
import { FormEvent, useState } from "react";

type LoginInput = {
  name: string;
  password: string;
};

import { authenticate } from "./_auth/authenticate";

export default function LoginPage() {
  const [hasError, setHasError] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values: LoginInput = {
      name: formData.get("loginId") as string,
      password: formData.get("password") as string,
    };
    console.log(values);

    if (!(await authenticate(values))) {
      setHasError(true);
      return;
    }
    console.log("ログイン成功");
    setHasError(false);
  };

  return (
    <div>
      <div className={hasError ? "" : "hidden"}>
        <span className="text-xl text-red-500">ログインに失敗しました。</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginId">ログインID</label>
          <input type="text" name="loginId" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input type="password" name="password" />
        </div>
        <Button type="submit">
          ログイン
        </Button>
      </form>
    </div>
  );
}
