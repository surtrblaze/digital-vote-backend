import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCandidateDto {

    @IsNumber()
    @IsNotEmpty()
    lista: number;

    @IsString()
    @IsNotEmpty()
    name: string;
}
    