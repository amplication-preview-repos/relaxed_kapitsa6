import { InterfaceModelWhereInput } from "./InterfaceModelWhereInput";
import { InterfaceModelOrderByInput } from "./InterfaceModelOrderByInput";

export type InterfaceModelFindManyArgs = {
  where?: InterfaceModelWhereInput;
  orderBy?: Array<InterfaceModelOrderByInput>;
  skip?: number;
  take?: number;
};
