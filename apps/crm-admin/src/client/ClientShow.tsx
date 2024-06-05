import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "./ClientTitle";
import { INTERFACEMODEL_TITLE_FIELD } from "../interfaceModel/InterfaceModelTitle";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="flexAccountNumber" source="flexAccountNumber" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ClientInterface"
          target="clientId"
          label="ClientInterfaces"
        >
          <Datagrid rowClick="show">
            <TextField label="accessDetails" source="accessDetails" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Contact"
          target="clientId"
          label="Contacts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RdpDetail"
          target="clientId"
          label="RDPDetails"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="host" source="host" />
            <TextField label="ID" source="id" />
            <TextField label="password" source="password" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
