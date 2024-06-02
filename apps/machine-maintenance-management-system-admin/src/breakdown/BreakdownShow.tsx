import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MACHINE_TITLE_FIELD } from "../machine/MachineTitle";

export const BreakdownShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="breakdownDate" source="breakdownDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Machine" source="machine.id" reference="Machine">
          <TextField source={MACHINE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="reporter" source="reporter" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
