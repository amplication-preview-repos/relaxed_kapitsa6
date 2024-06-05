import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InterfaceModelResolverBase } from "./base/interfaceModel.resolver.base";
import { InterfaceModel } from "./base/InterfaceModel";
import { InterfaceModelService } from "./interfaceModel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InterfaceModel)
export class InterfaceModelResolver extends InterfaceModelResolverBase {
  constructor(
    protected readonly service: InterfaceModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
