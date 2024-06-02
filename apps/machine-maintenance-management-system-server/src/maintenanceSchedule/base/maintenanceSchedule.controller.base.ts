/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MaintenanceScheduleService } from "../maintenanceSchedule.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MaintenanceScheduleCreateInput } from "./MaintenanceScheduleCreateInput";
import { MaintenanceSchedule } from "./MaintenanceSchedule";
import { MaintenanceScheduleFindManyArgs } from "./MaintenanceScheduleFindManyArgs";
import { MaintenanceScheduleWhereUniqueInput } from "./MaintenanceScheduleWhereUniqueInput";
import { MaintenanceScheduleUpdateInput } from "./MaintenanceScheduleUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MaintenanceScheduleControllerBase {
  constructor(
    protected readonly service: MaintenanceScheduleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MaintenanceSchedule })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MaintenanceScheduleCreateInput,
  })
  async createMaintenanceSchedule(
    @common.Body() data: MaintenanceScheduleCreateInput
  ): Promise<MaintenanceSchedule> {
    return await this.service.createMaintenanceSchedule({
      data: {
        ...data,

        machine: data.machine
          ? {
              connect: data.machine,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        interval: true,

        machine: {
          select: {
            id: true,
          },
        },

        scheduleDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MaintenanceSchedule] })
  @ApiNestedQuery(MaintenanceScheduleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async maintenanceSchedules(
    @common.Req() request: Request
  ): Promise<MaintenanceSchedule[]> {
    const args = plainToClass(MaintenanceScheduleFindManyArgs, request.query);
    return this.service.maintenanceSchedules({
      ...args,
      select: {
        createdAt: true,
        id: true,
        interval: true,

        machine: {
          select: {
            id: true,
          },
        },

        scheduleDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MaintenanceSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async maintenanceSchedule(
    @common.Param() params: MaintenanceScheduleWhereUniqueInput
  ): Promise<MaintenanceSchedule | null> {
    const result = await this.service.maintenanceSchedule({
      where: params,
      select: {
        createdAt: true,
        id: true,
        interval: true,

        machine: {
          select: {
            id: true,
          },
        },

        scheduleDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MaintenanceSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MaintenanceScheduleUpdateInput,
  })
  async updateMaintenanceSchedule(
    @common.Param() params: MaintenanceScheduleWhereUniqueInput,
    @common.Body() data: MaintenanceScheduleUpdateInput
  ): Promise<MaintenanceSchedule | null> {
    try {
      return await this.service.updateMaintenanceSchedule({
        where: params,
        data: {
          ...data,

          machine: data.machine
            ? {
                connect: data.machine,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          interval: true,

          machine: {
            select: {
              id: true,
            },
          },

          scheduleDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MaintenanceSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceSchedule",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMaintenanceSchedule(
    @common.Param() params: MaintenanceScheduleWhereUniqueInput
  ): Promise<MaintenanceSchedule | null> {
    try {
      return await this.service.deleteMaintenanceSchedule({
        where: params,
        select: {
          createdAt: true,
          id: true,
          interval: true,

          machine: {
            select: {
              id: true,
            },
          },

          scheduleDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}