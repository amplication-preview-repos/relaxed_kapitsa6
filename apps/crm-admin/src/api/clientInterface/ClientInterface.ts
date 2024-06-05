import { Client } from "../client/Client";
import { InterfaceModel } from "../interfaceModel/InterfaceModel";

export type ClientInterface = {
  accessDetails: string | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  interfaceField?: InterfaceModel | null;
  updatedAt: Date;
};
