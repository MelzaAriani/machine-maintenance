import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MACHINE_TITLE_FIELD } from "../machine/MachineTitle";

export const MaintenanceScheduleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="interval" source="interval" />
        <ReferenceField label="Machine" source="machine.id" reference="Machine">
          <TextField source={MACHINE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="scheduleDate" source="scheduleDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
