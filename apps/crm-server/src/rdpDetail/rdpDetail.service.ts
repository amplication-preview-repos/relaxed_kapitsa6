import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RdpDetailServiceBase } from "./base/rdpDetail.service.base";

@Injectable()
export class RdpDetailService extends RdpDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
