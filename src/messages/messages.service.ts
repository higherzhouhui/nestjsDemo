import { Injectable } from '@nestjs/common';
// import { Message } from './interfaces/message.interface';
// ORM
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createConnection } from 'typeorm';
import { Message } from './messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messagesRepository: Repository<Message>,
  ) {}

  private readonly messages: Message[] = [];

  async findAll(): Promise<Message[]> {
    return await this.messagesRepository.find();
  }
  insertIntoColumn() {
    const newMessage = new Message();
    newMessage.userId = 2;
    newMessage.content = '3333';
    newMessage.toUserId = 4;
    newMessage.createdTime = new Date();
    newMessage.creator = 3;
    newMessage.updatedTime = new Date();
    newMessage.updator = 5;
    this.messagesRepository.insert(newMessage);
    return { code: 200, msg: 'success' };
  }
  deleteDateColumn() {
    this.messagesRepository.delete(1);
  }
}
