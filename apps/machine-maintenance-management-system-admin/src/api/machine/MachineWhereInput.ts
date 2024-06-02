import { BreakdownReportListRelationFilter } from "../breakdownReport/BreakdownReportListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MaintenanceReportListRelationFilter } from "../maintenanceReport/MaintenanceReportListRelationFilter";
import { MaintenanceScheduleListRelationFilter } from "../maintenanceSchedule/MaintenanceScheduleListRelationFilter";

export type MachineWhereInput = {
  breakdowns?: BreakdownReportListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  maintenances?: MaintenanceReportListRelationFilter;
  maintenanceSchedules?: MaintenanceScheduleListRelationFilter;
  modelNumber?: StringNullableFilter;
  name?: StringNullableFilter;
};
