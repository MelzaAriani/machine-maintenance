import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaintenanceScheduleModuleBase } from "./base/maintenanceSchedule.module.base";
import { MaintenanceScheduleService } from "./maintenanceSchedule.service";
import { MaintenanceScheduleController } from "./maintenanceSchedule.controller";
import { MaintenanceScheduleResolver } from "./maintenanceSchedule.resolver";

@Module({
  imports: [MaintenanceScheduleModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaintenanceScheduleController],
  providers: [MaintenanceScheduleService, MaintenanceScheduleResolver],
  exports: [MaintenanceScheduleService],
})
export class MaintenanceScheduleModule {}
