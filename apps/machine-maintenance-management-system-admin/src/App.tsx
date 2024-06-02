import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MaintenanceList } from "./maintenance/MaintenanceList";
import { MaintenanceCreate } from "./maintenance/MaintenanceCreate";
import { MaintenanceEdit } from "./maintenance/MaintenanceEdit";
import { MaintenanceShow } from "./maintenance/MaintenanceShow";
import { MachineList } from "./machine/MachineList";
import { MachineCreate } from "./machine/MachineCreate";
import { MachineEdit } from "./machine/MachineEdit";
import { MachineShow } from "./machine/MachineShow";
import { BreakdownList } from "./breakdown/BreakdownList";
import { BreakdownCreate } from "./breakdown/BreakdownCreate";
import { BreakdownEdit } from "./breakdown/BreakdownEdit";
import { BreakdownShow } from "./breakdown/BreakdownShow";
import { MaintenanceScheduleList } from "./maintenanceSchedule/MaintenanceScheduleList";
import { MaintenanceScheduleCreate } from "./maintenanceSchedule/MaintenanceScheduleCreate";
import { MaintenanceScheduleEdit } from "./maintenanceSchedule/MaintenanceScheduleEdit";
import { MaintenanceScheduleShow } from "./maintenanceSchedule/MaintenanceScheduleShow";
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
        title={"MachineMaintenanceManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Maintenance"
          list={MaintenanceList}
          edit={MaintenanceEdit}
          create={MaintenanceCreate}
          show={MaintenanceShow}
        />
        <Resource
          name="Machine"
          list={MachineList}
          edit={MachineEdit}
          create={MachineCreate}
          show={MachineShow}
        />
        <Resource
          name="Breakdown"
          list={BreakdownList}
          edit={BreakdownEdit}
          create={BreakdownCreate}
          show={BreakdownShow}
        />
        <Resource
          name="MaintenanceSchedule"
          list={MaintenanceScheduleList}
          edit={MaintenanceScheduleEdit}
          create={MaintenanceScheduleCreate}
          show={MaintenanceScheduleShow}
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
