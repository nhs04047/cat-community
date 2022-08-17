import { CatsModule } from './../cats/cats.module';
import { Comments, CommentsShcema } from './comments.schema';
import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsShcema },
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
