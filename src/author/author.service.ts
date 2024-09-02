import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './schemas/author.schema';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async create(authorData: any): Promise<Author> {
    const author = new this.authorModel(authorData);
    return author.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async findById(id: string): Promise<Author> {
    const author = await this.authorModel.findById(id).exec();
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }

  async update(id: string, authorData: any): Promise<Author> {
    const author = await this.authorModel.findByIdAndUpdate(id, authorData, { new: true }).exec();
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }

  async delete(id: string): Promise<Author> {
    const author = await this.authorModel.findByIdAndDelete(id).exec();
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }
}
