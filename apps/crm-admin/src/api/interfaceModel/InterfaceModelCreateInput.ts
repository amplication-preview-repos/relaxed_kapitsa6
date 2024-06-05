import { ClientInterfaceCreateNestedManyWithoutInterfaceModelsInput } from "./ClientInterfaceCreateNestedManyWithoutInterfaceModelsInput";

export type InterfaceModelCreateInput = {
  clientInterfaces?: ClientInterfaceCreateNestedManyWithoutInterfaceModelsInput;
  description?: string | null;
  name?: string | null;
};
