import { Maintenance as TMaintenance } from "../api/maintenance/Maintenance";

export const MAINTENANCE_TITLE_FIELD = "reporter";

export const MaintenanceTitle = (record: TMaintenance): string => {
  return record.reporter?.toString() || String(record.id);
};
