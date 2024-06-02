import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type BreakdownReportUpdateInput = {
  breakdownDate?: Date | null;
  description?: string | null;
  machine?: MachineWhereUniqueInput | null;
  reporter?: string | null;
};
