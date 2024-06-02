import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BreakdownResolverBase } from "./base/breakdown.resolver.base";
import { Breakdown } from "./base/Breakdown";
import { BreakdownService } from "./breakdown.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Breakdown)
export class BreakdownResolver extends BreakdownResolverBase {
  constructor(
    protected readonly service: BreakdownService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
