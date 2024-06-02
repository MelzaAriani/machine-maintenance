import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MachineServiceBase } from "./base/machine.service.base";

@Injectable()
export class MachineService extends MachineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
