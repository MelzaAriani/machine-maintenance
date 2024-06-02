import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MaintenanceScheduleWhereInput = {
  id?: StringFilter;
  interval?: IntNullableFilter;
  machine?: MachineWhereUniqueInput;
  scheduleDate?: DateTimeNullableFilter;
};
