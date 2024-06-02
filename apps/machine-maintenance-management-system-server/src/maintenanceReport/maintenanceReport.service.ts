import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceReportServiceBase } from "./base/maintenanceReport.service.base";

@Injectable()
export class MaintenanceReportService extends MaintenanceReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
