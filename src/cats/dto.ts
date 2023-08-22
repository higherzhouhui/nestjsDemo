import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsString } from "class-validator";

export class CreateCatDto {
  @ApiProperty({
    description: 'name'
  })
  @IsString()
  name: string;
  @ApiProperty({
    description: 'age'
  })
  @IsInt()
  age: number;
  @ApiProperty({
    description: 'family,string数组类型'
  })
  @IsArray()
  family?: string[];
  @ApiProperty({
    description: 'breed'
  })
  @IsString()
  breed: string;
}
export class ListAllEntities {
  pageNum: number;
  pageSize: number;
}

export class UpdateCatDto {
  @ApiProperty({
    description: '品牌'
  })
  @IsString()
  breed: string;
  @ApiProperty({
    description: '姓名'
  })
  @IsString()
  name: string;
}

export class Cat {
  
}