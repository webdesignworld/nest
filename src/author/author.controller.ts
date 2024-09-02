import { Controller, Get, Delete, Put, Param, Body } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './schemas/author.schema';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Author> {
    return this.authorService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAuthorDto: any): Promise<Author> {
    return this.authorService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Author> {
    return this.authorService.delete(id);
  }
}
