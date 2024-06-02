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
import { MaintenanceService } from "../maintenance.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MaintenanceCreateInput } from "./MaintenanceCreateInput";
import { Maintenance } from "./Maintenance";
import { MaintenanceFindManyArgs } from "./MaintenanceFindManyArgs";
import { MaintenanceWhereUniqueInput } from "./MaintenanceWhereUniqueInput";
import { MaintenanceUpdateInput } from "./MaintenanceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MaintenanceControllerBase {
  constructor(
    protected readonly service: MaintenanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Maintenance })
  @nestAccessControl.UseRoles({
    resource: "Maintenance",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MaintenanceCreateInput,
  })
  async createMaintenance(
    @common.Body() data: MaintenanceCreateInput
  ): Promise<Maintenance> {
    return await this.service.createMaintenance({
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
        description: true,
        id: true,

        machine: {
          select: {
            id: true,
          },
        },

        maintenanceDate: true,
        reporter: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Maintenance] })
  @ApiNestedQuery(MaintenanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Maintenance",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async maintenances(@common.Req() request: Request): Promise<Maintenance[]> {
    const args = plainToClass(MaintenanceFindManyArgs, request.query);
    return this.service.maintenances({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,

        machine: {
          select: {
            id: true,
          },
        },

        maintenanceDate: true,
        reporter: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Maintenance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Maintenance",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async maintenance(
    @common.Param() params: MaintenanceWhereUniqueInput
  ): Promise<Maintenance | null> {
    const result = await this.service.maintenance({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,

        machine: {
          select: {
            id: true,
          },
        },

        maintenanceDate: true,
        reporter: true,
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
  @swagger.ApiOkResponse({ type: Maintenance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Maintenance",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MaintenanceUpdateInput,
  })
  async updateMaintenance(
    @common.Param() params: MaintenanceWhereUniqueInput,
    @common.Body() data: MaintenanceUpdateInput
  ): Promise<Maintenance | null> {
    try {
      return await this.service.updateMaintenance({
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
          description: true,
          id: true,

          machine: {
            select: {
              id: true,
            },
          },

          maintenanceDate: true,
          reporter: true,
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
  @swagger.ApiOkResponse({ type: Maintenance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Maintenance",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMaintenance(
    @common.Param() params: MaintenanceWhereUniqueInput
  ): Promise<Maintenance | null> {
    try {
      return await this.service.deleteMaintenance({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,

          machine: {
            select: {
              id: true,
            },
          },

          maintenanceDate: true,
          reporter: true,
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
