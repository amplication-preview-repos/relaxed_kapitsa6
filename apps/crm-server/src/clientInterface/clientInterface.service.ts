import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientInterfaceServiceBase } from "./base/clientInterface.service.base";

@Injectable()
export class ClientInterfaceService extends ClientInterfaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
