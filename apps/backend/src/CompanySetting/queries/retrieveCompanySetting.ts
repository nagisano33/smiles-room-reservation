import { client } from "../../client";

export async function retrieveCompanySetting(companyId: string) {
  return client.companySetting.findUniqueOrThrow({
    where: { companyId },
  })
}