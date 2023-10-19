import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/votodigitaldb'),
    CandidatesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
