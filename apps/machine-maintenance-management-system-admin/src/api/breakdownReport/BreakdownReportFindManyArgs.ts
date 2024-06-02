import { BreakdownReportWhereInput } from "./BreakdownReportWhereInput";
import { BreakdownReportOrderByInput } from "./BreakdownReportOrderByInput";

export type BreakdownReportFindManyArgs = {
  where?: BreakdownReportWhereInput;
  orderBy?: Array<BreakdownReportOrderByInput>;
  skip?: number;
  take?: number;
};
