import { InterfaceModel as TInterfaceModel } from "../api/interfaceModel/InterfaceModel";

export const INTERFACEMODEL_TITLE_FIELD = "name";

export const InterfaceModelTitle = (record: TInterfaceModel): string => {
  return record.name?.toString() || String(record.id);
};
