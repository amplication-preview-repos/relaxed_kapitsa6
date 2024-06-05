import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type ContactCreateInput = {
  client?: ClientWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
