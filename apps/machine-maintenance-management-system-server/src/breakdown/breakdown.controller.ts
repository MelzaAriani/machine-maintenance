import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BreakdownService } from "./breakdown.service";
import { BreakdownControllerBase } from "./base/breakdown.controller.base";

@swagger.ApiTags("breakdowns")
@common.Controller("breakdowns")
export class BreakdownController extends BreakdownControllerBase {
  constructor(
    protected readonly service: BreakdownService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
