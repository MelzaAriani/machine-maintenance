import { BreakdownWhereInput } from "./BreakdownWhereInput";
import { BreakdownOrderByInput } from "./BreakdownOrderByInput";

export type BreakdownFindManyArgs = {
  where?: BreakdownWhereInput;
  orderBy?: Array<BreakdownOrderByInput>;
  skip?: number;
  take?: number;
};
