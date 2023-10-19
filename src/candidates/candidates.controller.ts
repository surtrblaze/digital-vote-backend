import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, NotFoundException } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private candidatesService: CandidatesService) {}

  @Post()
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    try {
      return await this.candidatesService.create(createCandidateDto);

    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('La lista ya existe')
      }
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.candidatesService.findAll();
  }

  @Get(':lista')
  async findOne(@Param('lista') lista: number) {
    const candidate = await this.candidatesService.findOne(lista);
    if (!candidate) throw new NotFoundException('No se encontro esa lista')
    return candidate;
  }

  @Patch(':lista')
  async update(@Param('lista') lista: number, @Body() updateCandidateDto: UpdateCandidateDto) {
    const candidate = await this.candidatesService.update(lista, updateCandidateDto);
    if (!candidate) throw new NotFoundException('No se encontro ningun candidato con esa id')
    return candidate;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removedCandidate = await this.candidatesService.remove(id);
    if (!removedCandidate) throw new NotFoundException('No se encontro ningun candidato con esa id')
    return 'El candidato fue eliminado';
  }
}
