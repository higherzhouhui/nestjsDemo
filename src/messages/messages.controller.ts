import { Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './messages.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.messagesService.selectColumn(userId);
  }
  @Get('/add')
  addColumn() {
    return this.messagesService.insertIntoColumn();
  }
  @Get('/delete')
  deleteColumn() {
    return this.messagesService.deleteDateColumn();
  }
  @Post()
  findAll(): Promise<Message[]> {
    return this.messagesService.findAll();
  }
}
