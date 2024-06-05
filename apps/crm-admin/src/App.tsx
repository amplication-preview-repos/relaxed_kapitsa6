import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InterfaceModelList } from "./interfaceModel/InterfaceModelList";
import { InterfaceModelCreate } from "./interfaceModel/InterfaceModelCreate";
import { InterfaceModelEdit } from "./interfaceModel/InterfaceModelEdit";
import { InterfaceModelShow } from "./interfaceModel/InterfaceModelShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { ClientInterfaceList } from "./clientInterface/ClientInterfaceList";
import { ClientInterfaceCreate } from "./clientInterface/ClientInterfaceCreate";
import { ClientInterfaceEdit } from "./clientInterface/ClientInterfaceEdit";
import { ClientInterfaceShow } from "./clientInterface/ClientInterfaceShow";
import { RdpDetailList } from "./rdpDetail/RdpDetailList";
import { RdpDetailCreate } from "./rdpDetail/RdpDetailCreate";
import { RdpDetailEdit } from "./rdpDetail/RdpDetailEdit";
import { RdpDetailShow } from "./rdpDetail/RdpDetailShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InterfaceModel"
          list={InterfaceModelList}
          edit={InterfaceModelEdit}
          create={InterfaceModelCreate}
          show={InterfaceModelShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="ClientInterface"
          list={ClientInterfaceList}
          edit={ClientInterfaceEdit}
          create={ClientInterfaceCreate}
          show={ClientInterfaceShow}
        />
        <Resource
          name="RdpDetail"
          list={RdpDetailList}
          edit={RdpDetailEdit}
          create={RdpDetailCreate}
          show={RdpDetailShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
