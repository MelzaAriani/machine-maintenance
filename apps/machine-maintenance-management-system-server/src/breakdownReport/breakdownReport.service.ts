import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BreakdownReportServiceBase } from "./base/breakdownReport.service.base";

@Injectable()
export class BreakdownReportService extends BreakdownReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
