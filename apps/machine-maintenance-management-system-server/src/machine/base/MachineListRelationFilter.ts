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
import { MachineWhereInput } from "./MachineWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MachineListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MachineWhereInput,
  })
  @ValidateNested()
  @Type(() => MachineWhereInput)
  @IsOptional()
  @Field(() => MachineWhereInput, {
    nullable: true,
  })
  every?: MachineWhereInput;

  @ApiProperty({
    required: false,
    type: () => MachineWhereInput,
  })
  @ValidateNested()
  @Type(() => MachineWhereInput)
  @IsOptional()
  @Field(() => MachineWhereInput, {
    nullable: true,
  })
  some?: MachineWhereInput;

  @ApiProperty({
    required: false,
    type: () => MachineWhereInput,
  })
  @ValidateNested()
  @Type(() => MachineWhereInput)
  @IsOptional()
  @Field(() => MachineWhereInput, {
    nullable: true,
  })
  none?: MachineWhereInput;
}
export { MachineListRelationFilter as MachineListRelationFilter };