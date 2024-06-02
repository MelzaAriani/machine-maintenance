import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MaintenanceScheduleResolverBase } from "./base/maintenanceSchedule.resolver.base";
import { MaintenanceSchedule } from "./base/MaintenanceSchedule";
import { MaintenanceScheduleService } from "./maintenanceSchedule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MaintenanceSchedule)
export class MaintenanceScheduleResolver extends MaintenanceScheduleResolverBase {
  constructor(
    protected readonly service: MaintenanceScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
