import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { INTERFACEMODEL_TITLE_FIELD } from "../interfaceModel/InterfaceModelTitle";

export const ClientInterfaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accessDetails" source="accessDetails" />
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Interface"
          source="interfacemodel.id"
          reference="InterfaceModel"
        >
          <TextField source={INTERFACEMODEL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
