import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MACHINE_TITLE_FIELD } from "../machine/MachineTitle";

export const MaintenanceScheduleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MaintenanceSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="interval" source="interval" />
        <ReferenceField label="Machine" source="machine.id" reference="Machine">
          <TextField source={MACHINE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="scheduleDate" source="scheduleDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
