import { ClientInterfaceListRelationFilter } from "../clientInterface/ClientInterfaceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InterfaceModelWhereInput = {
  clientInterfaces?: ClientInterfaceListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
