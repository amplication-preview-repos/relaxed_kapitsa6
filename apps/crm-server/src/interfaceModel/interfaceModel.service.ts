import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InterfaceModelServiceBase } from "./base/interfaceModel.service.base";

@Injectable()
export class InterfaceModelService extends InterfaceModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
