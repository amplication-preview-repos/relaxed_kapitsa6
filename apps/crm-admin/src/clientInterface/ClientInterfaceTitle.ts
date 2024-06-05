import { ClientInterface as TClientInterface } from "../api/clientInterface/ClientInterface";

export const CLIENTINTERFACE_TITLE_FIELD = "id";

export const ClientInterfaceTitle = (record: TClientInterface): string => {
  return record.id?.toString() || String(record.id);
};
