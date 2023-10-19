import { Module } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Candidate, CandidateSchema } from './schema/candidate.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Candidate.name,
    schema: CandidateSchema
  }])],
  controllers: [CandidatesController],
  providers: [CandidatesService],
})
export class CandidatesModule {}
