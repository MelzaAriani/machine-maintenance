import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MachineTitle } from "../machine/MachineTitle";

export const MaintenanceReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="machine.id" reference="Machine" label="Machine">
          <SelectInput optionText={MachineTitle} />
        </ReferenceInput>
        <DateTimeInput label="maintenanceDate" source="maintenanceDate" />
        <TextInput label="reporter" source="reporter" />
      </SimpleForm>
    </Edit>
  );
};
