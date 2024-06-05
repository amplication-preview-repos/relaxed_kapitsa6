import { Client } from "../client/Client";

export type Contact = {
  client?: Client | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
