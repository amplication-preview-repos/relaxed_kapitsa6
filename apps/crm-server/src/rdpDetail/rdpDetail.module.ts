import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RdpDetailModuleBase } from "./base/rdpDetail.module.base";
import { RdpDetailService } from "./rdpDetail.service";
import { RdpDetailController } from "./rdpDetail.controller";
import { RdpDetailResolver } from "./rdpDetail.resolver";

@Module({
  imports: [RdpDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [RdpDetailController],
  providers: [RdpDetailService, RdpDetailResolver],
  exports: [RdpDetailService],
})
export class RdpDetailModule {}
