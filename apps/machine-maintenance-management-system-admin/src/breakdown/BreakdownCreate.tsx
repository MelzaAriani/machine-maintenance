import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MachineTitle } from "../machine/MachineTitle";

export const BreakdownCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="breakdownDate" source="breakdownDate" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="machine.id" reference="Machine" label="Machine">
          <SelectInput optionText={MachineTitle} />
        </ReferenceInput>
        <TextInput label="reporter" source="reporter" />
      </SimpleForm>
    </Create>
  );
};
