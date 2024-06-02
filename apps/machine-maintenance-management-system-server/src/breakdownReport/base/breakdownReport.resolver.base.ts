/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { BreakdownReport } from "./BreakdownReport";
import { BreakdownReportCountArgs } from "./BreakdownReportCountArgs";
import { BreakdownReportFindManyArgs } from "./BreakdownReportFindManyArgs";
import { BreakdownReportFindUniqueArgs } from "./BreakdownReportFindUniqueArgs";
import { CreateBreakdownReportArgs } from "./CreateBreakdownReportArgs";
import { UpdateBreakdownReportArgs } from "./UpdateBreakdownReportArgs";
import { DeleteBreakdownReportArgs } from "./DeleteBreakdownReportArgs";
import { Machine } from "../../machine/base/Machine";
import { BreakdownReportService } from "../breakdownReport.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BreakdownReport)
export class BreakdownReportResolverBase {
  constructor(
    protected readonly service: BreakdownReportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BreakdownReport",
    action: "read",
    possession: "any",
  })
  async _breakdownReportsMeta(
    @graphql.Args() args: BreakdownReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BreakdownReport])
  @nestAccessControl.UseRoles({
    resource: "BreakdownReport",
    action: "read",
    possession: "any",
  })
  async breakdownReports(
    @graphql.Args() args: BreakdownReportFindManyArgs
  ): Promise<BreakdownReport[]> {
    return this.service.breakdownReports(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BreakdownReport, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BreakdownReport",
    action: "read",
    possession: "own",
  })
  async breakdownReport(
    @graphql.Args() args: BreakdownReportFindUniqueArgs
  ): Promise<BreakdownReport | null> {
    const result = await this.service.breakdownReport(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BreakdownReport)
  @nestAccessControl.UseRoles({
    resource: "BreakdownReport",
    action: "create",
    possession: "any",
  })
  async createBreakdownReport(
    @graphql.Args() args: CreateBreakdownReportArgs
  ): Promise<BreakdownReport> {
    return await this.service.createBreakdownReport({
      ...args,
      data: {
        ...args.data,

        machine: args.data.machine
          ? {
              connect: args.data.machine,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BreakdownReport)
  @nestAccessControl.UseRoles({
    resource: "BreakdownReport",
    action: "update",
    possession: "any",
  })
  async updateBreakdownReport(
    @graphql.Args() args: UpdateBreakdownReportArgs
  ): Promise<BreakdownReport | null> {
    try {
      return await this.service.updateBreakdownReport({
        ...args,
        data: {
          ...args.data,

          machine: args.data.machine
            ? {
                connect: args.data.machine,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BreakdownReport)
  @nestAccessControl.UseRoles({
    resource: "BreakdownReport",
    action: "delete",
    possession: "any",
  })
  async deleteBreakdownReport(
    @graphql.Args() args: DeleteBreakdownReportArgs
  ): Promise<BreakdownReport | null> {
    try {
      return await this.service.deleteBreakdownReport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Machine, {
    nullable: true,
    name: "machine",
  })
  @nestAccessControl.UseRoles({
    resource: "Machine",
    action: "read",
    possession: "any",
  })
  async getMachine(
    @graphql.Parent() parent: BreakdownReport
  ): Promise<Machine | null> {
    const result = await this.service.getMachine(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}