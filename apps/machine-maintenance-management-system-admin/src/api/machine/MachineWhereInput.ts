import { BreakdownListRelationFilter } from "../breakdown/BreakdownListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MaintenanceListRelationFilter } from "../maintenance/MaintenanceListRelationFilter";
import { MaintenanceScheduleListRelationFilter } from "../maintenanceSchedule/MaintenanceScheduleListRelationFilter";

export type MachineWhereInput = {
  breakdowns?: BreakdownListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  maintenances?: MaintenanceListRelationFilter;
  maintenanceSchedules?: MaintenanceScheduleListRelationFilter;
  modelNumber?: StringNullableFilter;
  name?: StringNullableFilter;
};
