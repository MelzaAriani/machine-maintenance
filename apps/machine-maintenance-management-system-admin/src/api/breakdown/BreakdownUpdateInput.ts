import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type BreakdownUpdateInput = {
  breakdownDate?: Date | null;
  description?: string | null;
  machine?: MachineWhereUniqueInput | null;
  reporter?: string | null;
};
