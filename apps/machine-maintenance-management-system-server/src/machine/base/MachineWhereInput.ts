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
import { BreakdownListRelationFilter } from "../../breakdown/base/BreakdownListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MaintenanceListRelationFilter } from "../../maintenance/base/MaintenanceListRelationFilter";
import { MaintenanceScheduleListRelationFilter } from "../../maintenanceSchedule/base/MaintenanceScheduleListRelationFilter";

@InputType()
class MachineWhereInput {
  @ApiProperty({
    required: false,
    type: () => BreakdownListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BreakdownListRelationFilter)
  @IsOptional()
  @Field(() => BreakdownListRelationFilter, {
    nullable: true,
  })
  breakdowns?: BreakdownListRelationFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  location?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MaintenanceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MaintenanceListRelationFilter)
  @IsOptional()
  @Field(() => MaintenanceListRelationFilter, {
    nullable: true,
  })
  maintenances?: MaintenanceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MaintenanceScheduleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MaintenanceScheduleListRelationFilter)
  @IsOptional()
  @Field(() => MaintenanceScheduleListRelationFilter, {
    nullable: true,
  })
  maintenanceSchedules?: MaintenanceScheduleListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  modelNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;
}

export { MachineWhereInput as MachineWhereInput };
