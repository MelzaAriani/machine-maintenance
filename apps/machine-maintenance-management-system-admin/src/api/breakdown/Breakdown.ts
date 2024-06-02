import { Machine } from "../machine/Machine";

export type Breakdown = {
  breakdownDate: Date | null;
  createdAt: Date;
  description: string | null;
  id: string;
  machine?: Machine | null;
  reporter: string | null;
  updatedAt: Date;
};
