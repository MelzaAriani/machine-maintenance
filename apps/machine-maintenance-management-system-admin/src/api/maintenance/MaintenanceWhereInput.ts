import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MaintenanceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  machine?: MachineWhereUniqueInput;
  maintenanceDate?: DateTimeNullableFilter;
  reporter?: StringNullableFilter;
};
