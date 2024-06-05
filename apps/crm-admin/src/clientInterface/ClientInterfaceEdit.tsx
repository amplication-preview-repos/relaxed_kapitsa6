import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";
import { InterfaceModelTitle } from "../interfaceModel/InterfaceModelTitle";

export const ClientInterfaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accessDetails" multiline source="accessDetails" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="interfaceField.id"
          reference="InterfaceModel"
          label="Interface"
        >
          <SelectInput optionText={InterfaceModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
