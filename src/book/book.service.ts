import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schema/book.schema'; 

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: any): Promise<Book> {
    const book = new this.bookModel(createBookDto);
    return book.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().populate('author').exec();
  }
}
