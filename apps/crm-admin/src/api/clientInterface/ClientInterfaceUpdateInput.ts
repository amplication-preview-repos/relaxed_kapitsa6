import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InterfaceModelWhereUniqueInput } from "../interfaceModel/InterfaceModelWhereUniqueInput";

export type ClientInterfaceUpdateInput = {
  accessDetails?: string | null;
  client?: ClientWhereUniqueInput | null;
  interfaceField?: InterfaceModelWhereUniqueInput | null;
};
