import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type MaintenanceCreateInput = {
  description?: string | null;
  machine?: MachineWhereUniqueInput | null;
  maintenanceDate?: Date | null;
  reporter?: string | null;
};
