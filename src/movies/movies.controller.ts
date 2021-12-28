import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieservice: MoviesService) {}

    @Get()
    public getAll(): Movie[] {
        return this.movieservice.getAll();
    }
    
    @Get("/:id")
    public getOne(@Param("id") id: number): Movie {
        return this.movieservice.getOne(id);
    }

    @Post()
    public postOne(@Body() movieData: CreateMovieDto) {
        return this.movieservice.create(movieData);
    }

    @Patch("/:id")
    public patch(@Param("id") movieId: number, @Body() movieData: UpdateMovieDto) {
        return this.movieservice.update(movieId, movieData);
    }

    @Delete("/:id")
    public delete(@Param("id") movieId: number) {
        this.movieservice.deleteOne(movieId);
    }

}
