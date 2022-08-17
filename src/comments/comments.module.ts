import { CatsModule } from './../cats/cats.module';
import { CatsRepository } from './../cats/cats.repository';
import { Comments, CommentsScema } from './comments.schema';
import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forFeature([{ name: Comments.name, schema: CommentsScema }]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
