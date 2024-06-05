import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RdpDetailService } from "./rdpDetail.service";
import { RdpDetailControllerBase } from "./base/rdpDetail.controller.base";

@swagger.ApiTags("rdpDetails")
@common.Controller("rdpDetails")
export class RdpDetailController extends RdpDetailControllerBase {
  constructor(
    protected readonly service: RdpDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
