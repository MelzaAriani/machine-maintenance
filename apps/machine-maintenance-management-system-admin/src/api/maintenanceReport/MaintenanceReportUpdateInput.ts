import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type MaintenanceReportUpdateInput = {
  description?: string | null;
  machine?: MachineWhereUniqueInput | null;
  maintenanceDate?: Date | null;
  reporter?: string | null;
};
