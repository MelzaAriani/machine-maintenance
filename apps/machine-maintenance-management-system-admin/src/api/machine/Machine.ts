import { Breakdown } from "../breakdown/Breakdown";
import { Maintenance } from "../maintenance/Maintenance";
import { MaintenanceSchedule } from "../maintenanceSchedule/MaintenanceSchedule";

export type Machine = {
  breakdowns?: Array<Breakdown>;
  createdAt: Date;
  id: string;
  location: string | null;
  maintenances?: Array<Maintenance>;
  maintenanceSchedules?: Array<MaintenanceSchedule>;
  modelNumber: string | null;
  name: string | null;
  updatedAt: Date;
};
