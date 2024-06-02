import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MACHINE_TITLE_FIELD } from "../machine/MachineTitle";

export const BreakdownReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BreakdownReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="breakdownDate" source="breakdownDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Machine" source="machine.id" reference="Machine">
          <TextField source={MACHINE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="reporter" source="reporter" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
