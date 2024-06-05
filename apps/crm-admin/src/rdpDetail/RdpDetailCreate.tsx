import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";

export const RdpDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="host" source="host" />
        <TextInput label="password" source="password" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
