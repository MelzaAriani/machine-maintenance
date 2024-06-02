import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MachineTitle } from "../machine/MachineTitle";

export const MaintenanceScheduleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="interval" source="interval" />
        <ReferenceInput source="machine.id" reference="Machine" label="Machine">
          <SelectInput optionText={MachineTitle} />
        </ReferenceInput>
        <DateTimeInput label="scheduleDate" source="scheduleDate" />
      </SimpleForm>
    </Create>
  );
};
