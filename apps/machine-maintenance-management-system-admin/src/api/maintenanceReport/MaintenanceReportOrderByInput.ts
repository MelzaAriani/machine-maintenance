import { SortOrder } from "../../util/SortOrder";

export type MaintenanceReportOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  machineId?: SortOrder;
  maintenanceDate?: SortOrder;
  reporter?: SortOrder;
  updatedAt?: SortOrder;
};
