/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InterfaceModelWhereInput } from "./InterfaceModelWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InterfaceModelListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InterfaceModelWhereInput,
  })
  @ValidateNested()
  @Type(() => InterfaceModelWhereInput)
  @IsOptional()
  @Field(() => InterfaceModelWhereInput, {
    nullable: true,
  })
  every?: InterfaceModelWhereInput;

  @ApiProperty({
    required: false,
    type: () => InterfaceModelWhereInput,
  })
  @ValidateNested()
  @Type(() => InterfaceModelWhereInput)
  @IsOptional()
  @Field(() => InterfaceModelWhereInput, {
    nullable: true,
  })
  some?: InterfaceModelWhereInput;

  @ApiProperty({
    required: false,
    type: () => InterfaceModelWhereInput,
  })
  @ValidateNested()
  @Type(() => InterfaceModelWhereInput)
  @IsOptional()
  @Field(() => InterfaceModelWhereInput, {
    nullable: true,
  })
  none?: InterfaceModelWhereInput;
}
export { InterfaceModelListRelationFilter as InterfaceModelListRelationFilter };
