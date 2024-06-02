import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BreakdownReportModuleBase } from "./base/breakdownReport.module.base";
import { BreakdownReportService } from "./breakdownReport.service";
import { BreakdownReportController } from "./breakdownReport.controller";
import { BreakdownReportResolver } from "./breakdownReport.resolver";

@Module({
  imports: [BreakdownReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [BreakdownReportController],
  providers: [BreakdownReportService, BreakdownReportResolver],
  exports: [BreakdownReportService],
})
export class BreakdownReportModule {}
