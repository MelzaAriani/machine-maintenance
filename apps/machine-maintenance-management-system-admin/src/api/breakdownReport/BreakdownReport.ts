import { Machine } from "../machine/Machine";

export type BreakdownReport = {
  breakdownDate: Date | null;
  createdAt: Date;
  description: string | null;
  id: string;
  machine?: Machine | null;
  reporter: string | null;
  updatedAt: Date;
};
