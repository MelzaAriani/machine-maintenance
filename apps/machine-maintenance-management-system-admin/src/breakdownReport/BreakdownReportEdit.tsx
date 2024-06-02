import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MachineTitle } from "../machine/MachineTitle";

export const BreakdownReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="breakdownDate" source="breakdownDate" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="machine.id" reference="Machine" label="Machine">
          <SelectInput optionText={MachineTitle} />
        </ReferenceInput>
        <TextInput label="reporter" source="reporter" />
      </SimpleForm>
    </Edit>
  );
};
