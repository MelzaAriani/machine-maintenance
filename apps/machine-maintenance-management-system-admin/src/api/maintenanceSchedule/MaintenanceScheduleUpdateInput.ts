import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type MaintenanceScheduleUpdateInput = {
  interval?: number | null;
  machine?: MachineWhereUniqueInput | null;
  scheduleDate?: Date | null;
};
