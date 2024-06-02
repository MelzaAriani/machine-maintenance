import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaintenanceModuleBase } from "./base/maintenance.module.base";
import { MaintenanceService } from "./maintenance.service";
import { MaintenanceController } from "./maintenance.controller";
import { MaintenanceResolver } from "./maintenance.resolver";

@Module({
  imports: [MaintenanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaintenanceController],
  providers: [MaintenanceService, MaintenanceResolver],
  exports: [MaintenanceService],
})
export class MaintenanceModule {}
