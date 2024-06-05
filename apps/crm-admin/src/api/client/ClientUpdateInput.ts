import { ClientInterfaceUpdateManyWithoutClientsInput } from "./ClientInterfaceUpdateManyWithoutClientsInput";
import { ContactUpdateManyWithoutClientsInput } from "./ContactUpdateManyWithoutClientsInput";
import { RdpDetailUpdateManyWithoutClientsInput } from "./RdpDetailUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  address?: string | null;
  clientInterfaces?: ClientInterfaceUpdateManyWithoutClientsInput;
  contacts?: ContactUpdateManyWithoutClientsInput;
  email?: string | null;
  flexAccountNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rdpDetails?: RdpDetailUpdateManyWithoutClientsInput;
};
