import { BreakdownReportCreateNestedManyWithoutMachinesInput } from "./BreakdownReportCreateNestedManyWithoutMachinesInput";
import { MaintenanceReportCreateNestedManyWithoutMachinesInput } from "./MaintenanceReportCreateNestedManyWithoutMachinesInput";
import { MaintenanceScheduleCreateNestedManyWithoutMachinesInput } from "./MaintenanceScheduleCreateNestedManyWithoutMachinesInput";

export type MachineCreateInput = {
  breakdowns?: BreakdownReportCreateNestedManyWithoutMachinesInput;
  location?: string | null;
  maintenances?: MaintenanceReportCreateNestedManyWithoutMachinesInput;
  maintenanceSchedules?: MaintenanceScheduleCreateNestedManyWithoutMachinesInput;
  modelNumber?: string | null;
  name?: string | null;
};
