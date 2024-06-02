import { BreakdownReport } from "../breakdownReport/BreakdownReport";
import { MaintenanceReport } from "../maintenanceReport/MaintenanceReport";
import { MaintenanceSchedule } from "../maintenanceSchedule/MaintenanceSchedule";

export type Machine = {
  breakdowns?: Array<BreakdownReport>;
  createdAt: Date;
  id: string;
  location: string | null;
  maintenances?: Array<MaintenanceReport>;
  maintenanceSchedules?: Array<MaintenanceSchedule>;
  modelNumber: string | null;
  name: string | null;
  updatedAt: Date;
};
