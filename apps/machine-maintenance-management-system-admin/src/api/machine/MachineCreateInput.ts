import { BreakdownCreateNestedManyWithoutMachinesInput } from "./BreakdownCreateNestedManyWithoutMachinesInput";
import { MaintenanceCreateNestedManyWithoutMachinesInput } from "./MaintenanceCreateNestedManyWithoutMachinesInput";
import { MaintenanceScheduleCreateNestedManyWithoutMachinesInput } from "./MaintenanceScheduleCreateNestedManyWithoutMachinesInput";

export type MachineCreateInput = {
  breakdowns?: BreakdownCreateNestedManyWithoutMachinesInput;
  location?: string | null;
  maintenances?: MaintenanceCreateNestedManyWithoutMachinesInput;
  maintenanceSchedules?: MaintenanceScheduleCreateNestedManyWithoutMachinesInput;
  modelNumber?: string | null;
  name?: string | null;
};
