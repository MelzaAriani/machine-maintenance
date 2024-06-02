import { MaintenanceReport as TMaintenanceReport } from "../api/maintenanceReport/MaintenanceReport";

export const MAINTENANCEREPORT_TITLE_FIELD = "reporter";

export const MaintenanceReportTitle = (record: TMaintenanceReport): string => {
  return record.reporter?.toString() || String(record.id);
};
