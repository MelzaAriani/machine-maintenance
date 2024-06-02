import { MachineWhereInput } from "./MachineWhereInput";
import { MachineOrderByInput } from "./MachineOrderByInput";

export type MachineFindManyArgs = {
  where?: MachineWhereInput;
  orderBy?: Array<MachineOrderByInput>;
  skip?: number;
  take?: number;
};
