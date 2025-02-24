"use server";
import { getAccuontByname } from "@repo/auth/Account/queries/getAccountByName";

type LoginInput = {
  name: string;
  password: string;
};

export async function authenticate({ name, password }: LoginInput) {
  const account = await getAccuontByname(name);

  return password === account?.password;
}
