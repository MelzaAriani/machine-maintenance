import { Breakdown as TBreakdown } from "../api/breakdown/Breakdown";

export const BREAKDOWN_TITLE_FIELD = "reporter";

export const BreakdownTitle = (record: TBreakdown): string => {
  return record.reporter?.toString() || String(record.id);
};
