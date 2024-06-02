import { BreakdownReport as TBreakdownReport } from "../api/breakdownReport/BreakdownReport";

export const BREAKDOWNREPORT_TITLE_FIELD = "reporter";

export const BreakdownReportTitle = (record: TBreakdownReport): string => {
  return record.reporter?.toString() || String(record.id);
};
