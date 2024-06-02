import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MaintenanceService } from "./maintenance.service";
import { MaintenanceControllerBase } from "./base/maintenance.controller.base";

@swagger.ApiTags("maintenances")
@common.Controller("maintenances")
export class MaintenanceController extends MaintenanceControllerBase {
  constructor(
    protected readonly service: MaintenanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
