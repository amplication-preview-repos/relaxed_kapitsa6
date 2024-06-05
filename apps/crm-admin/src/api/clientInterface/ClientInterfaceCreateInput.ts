import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InterfaceModelWhereUniqueInput } from "../interfaceModel/InterfaceModelWhereUniqueInput";

export type ClientInterfaceCreateInput = {
  accessDetails?: string | null;
  client?: ClientWhereUniqueInput | null;
  interfaceField?: InterfaceModelWhereUniqueInput | null;
};
