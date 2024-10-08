import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-application'), AuthorModule, BookModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
