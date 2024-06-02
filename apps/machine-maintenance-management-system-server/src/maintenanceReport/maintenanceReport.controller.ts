import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MaintenanceReportService } from "./maintenanceReport.service";
import { MaintenanceReportControllerBase } from "./base/maintenanceReport.controller.base";

@swagger.ApiTags("maintenanceReports")
@common.Controller("maintenanceReports")
export class MaintenanceReportController extends MaintenanceReportControllerBase {
  constructor(
    protected readonly service: MaintenanceReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
