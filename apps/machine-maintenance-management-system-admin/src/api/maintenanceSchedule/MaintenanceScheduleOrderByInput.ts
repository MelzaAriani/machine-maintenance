import { SortOrder } from "../../util/SortOrder";

export type MaintenanceScheduleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  interval?: SortOrder;
  machineId?: SortOrder;
  scheduleDate?: SortOrder;
  updatedAt?: SortOrder;
};
