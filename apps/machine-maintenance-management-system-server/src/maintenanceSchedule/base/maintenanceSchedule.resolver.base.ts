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
import { MaintenanceSchedule } from "./MaintenanceSchedule";
import { MaintenanceScheduleCountArgs } from "./MaintenanceScheduleCountArgs";
import { MaintenanceScheduleFindManyArgs } from "./MaintenanceScheduleFindManyArgs";
import { MaintenanceScheduleFindUniqueArgs } from "./MaintenanceScheduleFindUniqueArgs";
import { CreateMaintenanceScheduleArgs } from "./CreateMaintenanceScheduleArgs";
import { UpdateMaintenanceScheduleArgs } from "./UpdateMaintenanceScheduleArgs";
import { DeleteMaintenanceScheduleArgs } from "./DeleteMaintenanceScheduleArgs";
import { Machine } from "../../machine/base/Machine";
import { MaintenanceScheduleService } from "../maintenanceSchedule.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MaintenanceSchedule)
export class MaintenanceScheduleResolverBase {
  constructor(
    protected readonly service: MaintenanceScheduleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "read",
    possession: "any",
  })
  async _maintenanceSchedulesMeta(
    @graphql.Args() args: MaintenanceScheduleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MaintenanceSchedule])
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "read",
    possession: "any",
  })
  async maintenanceSchedules(
    @graphql.Args() args: MaintenanceScheduleFindManyArgs
  ): Promise<MaintenanceSchedule[]> {
    return this.service.maintenanceSchedules(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MaintenanceSchedule, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "read",
    possession: "own",
  })
  async maintenanceSchedule(
    @graphql.Args() args: MaintenanceScheduleFindUniqueArgs
  ): Promise<MaintenanceSchedule | null> {
    const result = await this.service.maintenanceSchedule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MaintenanceSchedule)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "create",
    possession: "any",
  })
  async createMaintenanceSchedule(
    @graphql.Args() args: CreateMaintenanceScheduleArgs
  ): Promise<MaintenanceSchedule> {
    return await this.service.createMaintenanceSchedule({
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
  @graphql.Mutation(() => MaintenanceSchedule)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "update",
    possession: "any",
  })
  async updateMaintenanceSchedule(
    @graphql.Args() args: UpdateMaintenanceScheduleArgs
  ): Promise<MaintenanceSchedule | null> {
    try {
      return await this.service.updateMaintenanceSchedule({
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

  @graphql.Mutation(() => MaintenanceSchedule)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "delete",
    possession: "any",
  })
  async deleteMaintenanceSchedule(
    @graphql.Args() args: DeleteMaintenanceScheduleArgs
  ): Promise<MaintenanceSchedule | null> {
    try {
      return await this.service.deleteMaintenanceSchedule(args);
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
    @graphql.Parent() parent: MaintenanceSchedule
  ): Promise<Machine | null> {
    const result = await this.service.getMachine(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
