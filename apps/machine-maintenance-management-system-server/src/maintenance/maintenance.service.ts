import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceServiceBase } from "./base/maintenance.service.base";

@Injectable()
export class MaintenanceService extends MaintenanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
