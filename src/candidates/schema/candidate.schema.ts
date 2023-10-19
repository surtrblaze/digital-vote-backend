import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Candidate {
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    lista: number;

    @Prop({
        trim: true
    })
    name: string;

    @Prop()
    votes: number;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);