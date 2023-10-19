import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateDto } from './create-candidate.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCandidateDto extends PartialType(CreateCandidateDto) {

    @IsNumber()
    @IsOptional()
    lista?: number;

    @IsString()
    @IsOptional()
    name?: string;

}
