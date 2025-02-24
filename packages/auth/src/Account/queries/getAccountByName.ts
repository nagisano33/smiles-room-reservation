import { client } from "../../client";

export function getAccuontByname(name: string) {
  return client.account.findUnique({
    where: {
      name
    }
  });
}