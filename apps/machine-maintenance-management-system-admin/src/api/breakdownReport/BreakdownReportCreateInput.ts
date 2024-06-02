import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type BreakdownReportCreateInput = {
  breakdownDate?: Date | null;
  description?: string | null;
  machine?: MachineWhereUniqueInput | null;
  reporter?: string | null;
};
