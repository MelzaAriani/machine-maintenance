/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MaintenanceWhereUniqueInput } from "./MaintenanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MaintenanceUpdateInput } from "./MaintenanceUpdateInput";

@ArgsType()
class UpdateMaintenanceArgs {
  @ApiProperty({
    required: true,
    type: () => MaintenanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceWhereUniqueInput)
  @Field(() => MaintenanceWhereUniqueInput, { nullable: false })
  where!: MaintenanceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MaintenanceUpdateInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceUpdateInput)
  @Field(() => MaintenanceUpdateInput, { nullable: false })
  data!: MaintenanceUpdateInput;
}

export { UpdateMaintenanceArgs as UpdateMaintenanceArgs };