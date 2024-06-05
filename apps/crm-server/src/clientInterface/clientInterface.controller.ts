import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClientInterfaceService } from "./clientInterface.service";
import { ClientInterfaceControllerBase } from "./base/clientInterface.controller.base";

@swagger.ApiTags("clientInterfaces")
@common.Controller("clientInterfaces")
export class ClientInterfaceController extends ClientInterfaceControllerBase {
  constructor(
    protected readonly service: ClientInterfaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
