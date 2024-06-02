import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BreakdownReportService } from "./breakdownReport.service";
import { BreakdownReportControllerBase } from "./base/breakdownReport.controller.base";

@swagger.ApiTags("breakdownReports")
@common.Controller("breakdownReports")
export class BreakdownReportController extends BreakdownReportControllerBase {
  constructor(
    protected readonly service: BreakdownReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
