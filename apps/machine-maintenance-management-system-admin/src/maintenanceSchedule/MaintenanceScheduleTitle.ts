import { MaintenanceSchedule as TMaintenanceSchedule } from "../api/maintenanceSchedule/MaintenanceSchedule";

export const MAINTENANCESCHEDULE_TITLE_FIELD = "id";

export const MaintenanceScheduleTitle = (
  record: TMaintenanceSchedule
): string => {
  return record.id?.toString() || String(record.id);
};
