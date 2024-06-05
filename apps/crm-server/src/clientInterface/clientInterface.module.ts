import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClientInterfaceModuleBase } from "./base/clientInterface.module.base";
import { ClientInterfaceService } from "./clientInterface.service";
import { ClientInterfaceController } from "./clientInterface.controller";
import { ClientInterfaceResolver } from "./clientInterface.resolver";

@Module({
  imports: [ClientInterfaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClientInterfaceController],
  providers: [ClientInterfaceService, ClientInterfaceResolver],
  exports: [ClientInterfaceService],
})
export class ClientInterfaceModule {}
