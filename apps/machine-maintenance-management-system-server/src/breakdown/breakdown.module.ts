import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BreakdownModuleBase } from "./base/breakdown.module.base";
import { BreakdownService } from "./breakdown.service";
import { BreakdownController } from "./breakdown.controller";
import { BreakdownResolver } from "./breakdown.resolver";

@Module({
  imports: [BreakdownModuleBase, forwardRef(() => AuthModule)],
  controllers: [BreakdownController],
  providers: [BreakdownService, BreakdownResolver],
  exports: [BreakdownService],
})
export class BreakdownModule {}
