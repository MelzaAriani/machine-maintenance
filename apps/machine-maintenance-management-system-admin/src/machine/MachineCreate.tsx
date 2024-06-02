import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BreakdownTitle } from "../breakdown/BreakdownTitle";
import { MaintenanceTitle } from "../maintenance/MaintenanceTitle";
import { MaintenanceScheduleTitle } from "../maintenanceSchedule/MaintenanceScheduleTitle";

export const MachineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="breakdowns"
          reference="Breakdown"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BreakdownTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <ReferenceArrayInput
          source="maintenances"
          reference="Maintenance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="maintenanceSchedules"
          reference="MaintenanceSchedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceScheduleTitle} />
        </ReferenceArrayInput>
        <TextInput label="modelNumber" source="modelNumber" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
