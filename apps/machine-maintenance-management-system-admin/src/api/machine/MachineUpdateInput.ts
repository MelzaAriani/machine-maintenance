import { BreakdownUpdateManyWithoutMachinesInput } from "./BreakdownUpdateManyWithoutMachinesInput";
import { MaintenanceUpdateManyWithoutMachinesInput } from "./MaintenanceUpdateManyWithoutMachinesInput";
import { MaintenanceScheduleUpdateManyWithoutMachinesInput } from "./MaintenanceScheduleUpdateManyWithoutMachinesInput";

export type MachineUpdateInput = {
  breakdowns?: BreakdownUpdateManyWithoutMachinesInput;
  location?: string | null;
  maintenances?: MaintenanceUpdateManyWithoutMachinesInput;
  maintenanceSchedules?: MaintenanceScheduleUpdateManyWithoutMachinesInput;
  modelNumber?: string | null;
  name?: string | null;
};
