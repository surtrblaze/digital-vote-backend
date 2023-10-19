import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Candidate } from './schema/candidate.schema';
import { Model } from 'mongoose';

@Injectable()
export class CandidatesService {

  constructor(@InjectModel(Candidate.name) private candidateModel: Model<Candidate>) {}

  async create(createCandidateDto: CreateCandidateDto) {
    const newCandidate = new this.candidateModel(createCandidateDto);
    await newCandidate.save();
    return newCandidate;
  }

  findAll() {
    return this.candidateModel.find();
  }

  async findOne(lista: number) {
    const candidate = await this.candidateModel.findOne({ lista });
    return candidate;
  }

  async update(lista: number, updateCandidateDto: UpdateCandidateDto) {
    await this.candidateModel.findOneAndUpdate({ lista }, updateCandidateDto);
    return `El candidato de la lista ${lista} a sido actualizada`;
  }

  async remove(id: string) {
    await this.candidateModel.findByIdAndRemove(id)
    return `El candidato de la lista ${id} a sido eliminado`;
  }
}
