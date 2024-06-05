import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RdpDetailWhereInput = {
  client?: ClientWhereUniqueInput;
  host?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
