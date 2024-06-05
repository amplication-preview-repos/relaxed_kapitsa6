import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type ContactUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
