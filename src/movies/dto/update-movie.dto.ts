import { IsString, IsNumber } from 'class-validator';

export class UpdateMovieDto {
    
    @IsString()
    title: string;

    @IsNumber()
    year: number;
    
}