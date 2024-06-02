import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type BreakdownCreateInput = {
  breakdownDate?: Date | null;
  description?: string | null;
  machine?: MachineWhereUniqueInput | null;
  reporter?: string | null;
};
