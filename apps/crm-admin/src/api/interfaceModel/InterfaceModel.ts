import { ClientInterface } from "../clientInterface/ClientInterface";

export type InterfaceModel = {
  clientInterfaces?: Array<ClientInterface>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
