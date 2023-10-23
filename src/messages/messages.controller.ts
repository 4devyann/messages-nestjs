import { Body, Controller, Get, Param, Post } from '@nestjs/common';

interface IMessage {
  id: number;
  value: string;
}

@Controller('messages')
export class MessagesController {
  private messages: IMessage[] = [
    { id: 1, value: 'Message 1' },
    { id: 2, value: 'Message 2' },
  ];

  @Get()
  listMessages() {
    return this.messages;
  }

  @Post()
  createMessage(@Body() body: IMessage) {
    this.messages.push(body);

    return this.messages;
  }

  @Get('/:id')
  getMessage(@Param('id') id: number) {
    return this.messages.find(item => item.id.toString() === id.toString());
  }
}
