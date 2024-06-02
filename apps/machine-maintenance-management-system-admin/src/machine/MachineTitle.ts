import { Machine as TMachine } from "../api/machine/Machine";

export const MACHINE_TITLE_FIELD = "name";

export const MachineTitle = (record: TMachine): string => {
  return record.name?.toString() || String(record.id);
};
