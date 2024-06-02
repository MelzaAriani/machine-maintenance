import { Machine } from "../machine/Machine";

export type MaintenanceSchedule = {
  createdAt: Date;
  id: string;
  interval: number | null;
  machine?: Machine | null;
  scheduleDate: Date | null;
  updatedAt: Date;
};
