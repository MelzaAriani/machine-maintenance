import { MaintenanceWhereInput } from "./MaintenanceWhereInput";
import { MaintenanceOrderByInput } from "./MaintenanceOrderByInput";

export type MaintenanceFindManyArgs = {
  where?: MaintenanceWhereInput;
  orderBy?: Array<MaintenanceOrderByInput>;
  skip?: number;
  take?: number;
};
