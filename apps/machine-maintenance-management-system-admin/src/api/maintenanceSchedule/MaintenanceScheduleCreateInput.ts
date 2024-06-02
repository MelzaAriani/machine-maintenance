import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type MaintenanceScheduleCreateInput = {
  interval?: number | null;
  machine?: MachineWhereUniqueInput | null;
  scheduleDate?: Date | null;
};
