import { SortOrder } from "../../util/SortOrder";

export type MachineOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  modelNumber?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
