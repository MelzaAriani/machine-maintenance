import { MaintenanceReportWhereInput } from "./MaintenanceReportWhereInput";
import { MaintenanceReportOrderByInput } from "./MaintenanceReportOrderByInput";

export type MaintenanceReportFindManyArgs = {
  where?: MaintenanceReportWhereInput;
  orderBy?: Array<MaintenanceReportOrderByInput>;
  skip?: number;
  take?: number;
};
