import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MachineModuleBase } from "./base/machine.module.base";
import { MachineService } from "./machine.service";
import { MachineController } from "./machine.controller";
import { MachineResolver } from "./machine.resolver";

@Module({
  imports: [MachineModuleBase, forwardRef(() => AuthModule)],
  controllers: [MachineController],
  providers: [MachineService, MachineResolver],
  exports: [MachineService],
})
export class MachineModule {}
