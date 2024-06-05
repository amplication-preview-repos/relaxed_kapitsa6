import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InterfaceModelService } from "./interfaceModel.service";
import { InterfaceModelControllerBase } from "./base/interfaceModel.controller.base";

@swagger.ApiTags("interfaceModels")
@common.Controller("interfaceModels")
export class InterfaceModelController extends InterfaceModelControllerBase {
  constructor(
    protected readonly service: InterfaceModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
