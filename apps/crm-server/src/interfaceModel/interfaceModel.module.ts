import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InterfaceModelModuleBase } from "./base/interfaceModel.module.base";
import { InterfaceModelService } from "./interfaceModel.service";
import { InterfaceModelController } from "./interfaceModel.controller";
import { InterfaceModelResolver } from "./interfaceModel.resolver";

@Module({
  imports: [InterfaceModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [InterfaceModelController],
  providers: [InterfaceModelService, InterfaceModelResolver],
  exports: [InterfaceModelService],
})
export class InterfaceModelModule {}
