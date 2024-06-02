import { SortOrder } from "../../util/SortOrder";

export type BreakdownOrderByInput = {
  breakdownDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  machineId?: SortOrder;
  reporter?: SortOrder;
  updatedAt?: SortOrder;
};
