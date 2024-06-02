import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BreakdownReportResolverBase } from "./base/breakdownReport.resolver.base";
import { BreakdownReport } from "./base/BreakdownReport";
import { BreakdownReportService } from "./breakdownReport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BreakdownReport)
export class BreakdownReportResolver extends BreakdownReportResolverBase {
  constructor(
    protected readonly service: BreakdownReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
