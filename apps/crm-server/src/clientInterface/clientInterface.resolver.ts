import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClientInterfaceResolverBase } from "./base/clientInterface.resolver.base";
import { ClientInterface } from "./base/ClientInterface";
import { ClientInterfaceService } from "./clientInterface.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClientInterface)
export class ClientInterfaceResolver extends ClientInterfaceResolverBase {
  constructor(
    protected readonly service: ClientInterfaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
