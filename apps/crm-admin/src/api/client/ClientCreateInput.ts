import { ClientInterfaceCreateNestedManyWithoutClientsInput } from "./ClientInterfaceCreateNestedManyWithoutClientsInput";
import { ContactCreateNestedManyWithoutClientsInput } from "./ContactCreateNestedManyWithoutClientsInput";
import { RdpDetailCreateNestedManyWithoutClientsInput } from "./RdpDetailCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  clientInterfaces?: ClientInterfaceCreateNestedManyWithoutClientsInput;
  contacts?: ContactCreateNestedManyWithoutClientsInput;
  email?: string | null;
  flexAccountNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rdpDetails?: RdpDetailCreateNestedManyWithoutClientsInput;
};
