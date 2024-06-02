import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";

export type BreakdownReportWhereInput = {
  breakdownDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  machine?: MachineWhereUniqueInput;
  reporter?: StringNullableFilter;
};
