import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type MaintenanceReportCreateInput = {
  description?: string | null;
  machine?: MachineWhereUniqueInput | null;
  maintenanceDate?: Date | null;
  reporter?: string | null;
};
