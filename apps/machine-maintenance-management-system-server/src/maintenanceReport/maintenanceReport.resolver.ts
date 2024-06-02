import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MaintenanceReportResolverBase } from "./base/maintenanceReport.resolver.base";
import { MaintenanceReport } from "./base/MaintenanceReport";
import { MaintenanceReportService } from "./maintenanceReport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MaintenanceReport)
export class MaintenanceReportResolver extends MaintenanceReportResolverBase {
  constructor(
    protected readonly service: MaintenanceReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
