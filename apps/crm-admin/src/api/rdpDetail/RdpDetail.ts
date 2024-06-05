import { Client } from "../client/Client";

export type RdpDetail = {
  client?: Client | null;
  createdAt: Date;
  host: string | null;
  id: string;
  password: string | null;
  updatedAt: Date;
  username: string | null;
};
