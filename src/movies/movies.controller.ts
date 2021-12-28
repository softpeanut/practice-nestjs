import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { identity } from 'rxjs';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieservice: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.movieservice.getAll();
    }
    
    @Get("/:id")
    getOne(@Param("id") id: string): Movie {
        return this.movieservice.getOne(id);
    }

    @Post()
    postOne(@Body() movieData) {
        return this.movieservice.create(movieData);
    }

    @Patch("/:id")
    patch(@Param("id") movieId: string, @Body() movieData) {
        return this.movieservice.update(movieId, movieData);
    }

    @Delete("/:id")
    delete(@Param("id") movieId: string) {
        this.movieservice.deleteOne(movieId);
    }

}
