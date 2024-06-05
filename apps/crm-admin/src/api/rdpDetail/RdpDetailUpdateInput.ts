import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type RdpDetailUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  host?: string | null;
  password?: string | null;
  username?: string | null;
};
