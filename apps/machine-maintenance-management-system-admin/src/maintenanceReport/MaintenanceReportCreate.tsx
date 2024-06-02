import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MachineTitle } from "../machine/MachineTitle";

export const MaintenanceReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="machine.id" reference="Machine" label="Machine">
          <SelectInput optionText={MachineTitle} />
        </ReferenceInput>
        <DateTimeInput label="maintenanceDate" source="maintenanceDate" />
        <TextInput label="reporter" source="reporter" />
      </SimpleForm>
    </Create>
  );
};
