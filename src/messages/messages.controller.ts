import { Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './messages.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get('/users')
  getAll(): Promise<Message[]> {
    return this.messagesService.findAll();
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
