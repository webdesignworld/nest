import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() createBookDto: any): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }


}
