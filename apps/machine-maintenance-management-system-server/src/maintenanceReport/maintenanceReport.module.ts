import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaintenanceReportModuleBase } from "./base/maintenanceReport.module.base";
import { MaintenanceReportService } from "./maintenanceReport.service";
import { MaintenanceReportController } from "./maintenanceReport.controller";
import { MaintenanceReportResolver } from "./maintenanceReport.resolver";

@Module({
  imports: [MaintenanceReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaintenanceReportController],
  providers: [MaintenanceReportService, MaintenanceReportResolver],
  exports: [MaintenanceReportService],
})
export class MaintenanceReportModule {}
