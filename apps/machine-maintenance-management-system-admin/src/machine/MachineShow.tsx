import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MACHINE_TITLE_FIELD } from "./MachineTitle";

export const MachineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="modelNumber" source="modelNumber" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Breakdown"
          target="machineId"
          label="Breakdowns"
        >
          <Datagrid rowClick="show">
            <TextField label="breakdownDate" source="breakdownDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Machine"
              source="machine.id"
              reference="Machine"
            >
              <TextField source={MACHINE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="reporter" source="reporter" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Maintenance"
          target="machineId"
          label="Maintenances"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Machine"
              source="machine.id"
              reference="Machine"
            >
              <TextField source={MACHINE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="maintenanceDate" source="maintenanceDate" />
            <TextField label="reporter" source="reporter" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MaintenanceSchedule"
          target="machineId"
          label="MaintenanceSchedules"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="interval" source="interval" />
            <ReferenceField
              label="Machine"
              source="machine.id"
              reference="Machine"
            >
              <TextField source={MACHINE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="scheduleDate" source="scheduleDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
