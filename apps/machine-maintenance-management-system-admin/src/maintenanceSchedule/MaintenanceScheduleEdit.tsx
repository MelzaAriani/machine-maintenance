import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MachineTitle } from "../machine/MachineTitle";

export const MaintenanceScheduleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="interval" source="interval" />
        <ReferenceInput source="machine.id" reference="Machine" label="Machine">
          <SelectInput optionText={MachineTitle} />
        </ReferenceInput>
        <DateTimeInput label="scheduleDate" source="scheduleDate" />
      </SimpleForm>
    </Edit>
  );
};
