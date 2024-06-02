import { BreakdownReportUpdateManyWithoutMachinesInput } from "./BreakdownReportUpdateManyWithoutMachinesInput";
import { MaintenanceReportUpdateManyWithoutMachinesInput } from "./MaintenanceReportUpdateManyWithoutMachinesInput";
import { MaintenanceScheduleUpdateManyWithoutMachinesInput } from "./MaintenanceScheduleUpdateManyWithoutMachinesInput";

export type MachineUpdateInput = {
  breakdowns?: BreakdownReportUpdateManyWithoutMachinesInput;
  location?: string | null;
  maintenances?: MaintenanceReportUpdateManyWithoutMachinesInput;
  maintenanceSchedules?: MaintenanceScheduleUpdateManyWithoutMachinesInput;
  modelNumber?: string | null;
  name?: string | null;
};
