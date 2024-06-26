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
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { MachineWhereUniqueInput } from "../../machine/base/MachineWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class MaintenanceReportCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

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
  machine?: MachineWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  maintenanceDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reporter?: string | null;
}

export { MaintenanceReportCreateInput as MaintenanceReportCreateInput };
