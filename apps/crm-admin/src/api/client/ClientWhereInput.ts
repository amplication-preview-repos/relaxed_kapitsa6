import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientInterfaceListRelationFilter } from "../clientInterface/ClientInterfaceListRelationFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RdpDetailListRelationFilter } from "../rdpDetail/RdpDetailListRelationFilter";

export type ClientWhereInput = {
  address?: StringNullableFilter;
  clientInterfaces?: ClientInterfaceListRelationFilter;
  contacts?: ContactListRelationFilter;
  email?: StringNullableFilter;
  flexAccountNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rdpDetails?: RdpDetailListRelationFilter;
};
