import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BreakdownServiceBase } from "./base/breakdown.service.base";

@Injectable()
export class BreakdownService extends BreakdownServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
