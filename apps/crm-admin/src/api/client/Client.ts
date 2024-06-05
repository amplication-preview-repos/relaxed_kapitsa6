import { ClientInterface } from "../clientInterface/ClientInterface";
import { Contact } from "../contact/Contact";
import { RdpDetail } from "../rdpDetail/RdpDetail";

export type Client = {
  address: string | null;
  clientInterfaces?: Array<ClientInterface>;
  contacts?: Array<Contact>;
  createdAt: Date;
  email: string | null;
  flexAccountNumber: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  rdpDetails?: Array<RdpDetail>;
  updatedAt: Date;
};
