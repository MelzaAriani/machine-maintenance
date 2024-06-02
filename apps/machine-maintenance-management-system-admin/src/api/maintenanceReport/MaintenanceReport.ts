import { Machine } from "../machine/Machine";

export type MaintenanceReport = {
  createdAt: Date;
  description: string | null;
  id: string;
  machine?: Machine | null;
  maintenanceDate: Date | null;
  reporter: string | null;
  updatedAt: Date;
};
