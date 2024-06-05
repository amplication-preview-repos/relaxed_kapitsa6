import { ClientInterfaceWhereInput } from "./ClientInterfaceWhereInput";
import { ClientInterfaceOrderByInput } from "./ClientInterfaceOrderByInput";

export type ClientInterfaceFindManyArgs = {
  where?: ClientInterfaceWhereInput;
  orderBy?: Array<ClientInterfaceOrderByInput>;
  skip?: number;
  take?: number;
};
