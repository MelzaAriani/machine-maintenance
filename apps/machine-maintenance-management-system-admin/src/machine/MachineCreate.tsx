import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BreakdownReportTitle } from "../breakdownReport/BreakdownReportTitle";
import { MaintenanceReportTitle } from "../maintenanceReport/MaintenanceReportTitle";
import { MaintenanceScheduleTitle } from "../maintenanceSchedule/MaintenanceScheduleTitle";

export const MachineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="breakdowns"
          reference="BreakdownReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BreakdownReportTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <ReferenceArrayInput
          source="maintenances"
          reference="MaintenanceReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceReportTitle} />
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
