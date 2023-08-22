import {
  Controller,
  Get,
  Post,
  Header,
  Query,
  Param,
  Body,
  Delete,
  Put,
  Res,
} from '@nestjs/common';
import { Cat, CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { ValidationPipe } from './validation.pipe';
import { ApiHeader, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('用户,安全')
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @Header('token', '888')
  @ApiParam({
    name: 'id',
    description: '这是用户id',
  })
  @ApiParam({
    name: 'name',
    description: '这是用户name',
  })
  @ApiQuery({
      name: 'role',
      description: '这是需要传递的参数',
  })
  @ApiHeader({
      name: 'authoriation',
      required: true,
      description: '本次请求请带上token',
  })
  async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    console.log(query)
    return this.catsService.findAll(query);
  }

  // 自定义状态码
  @Get('/test')
  testRes(@Res() res: Response) {
    res.send({code: 200, data: {list: []}, message: '操作成功'})
    // res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')  
  findOne(@Param('id', ValidationPipe) id: number): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    this.catsService.create(createCatDto)
    return ''
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
