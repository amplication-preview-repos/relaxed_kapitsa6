import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InterfaceModelWhereUniqueInput } from "../interfaceModel/InterfaceModelWhereUniqueInput";

export type ClientInterfaceWhereInput = {
  accessDetails?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  interfaceField?: InterfaceModelWhereUniqueInput;
};
