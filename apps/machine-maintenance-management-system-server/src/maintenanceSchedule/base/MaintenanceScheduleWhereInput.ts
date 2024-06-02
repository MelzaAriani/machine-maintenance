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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MachineWhereUniqueInput } from "../../machine/base/MachineWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

@InputType()
class MaintenanceScheduleWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  interval?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MachineWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MachineWhereUniqueInput)
  @IsOptional()
  @Field(() => MachineWhereUniqueInput, {
    nullable: true,
  })
  machine?: MachineWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  scheduleDate?: DateTimeNullableFilter;
}

export { MaintenanceScheduleWhereInput as MaintenanceScheduleWhereInput };
