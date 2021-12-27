import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieservice: MoviesService) {}

    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("search")
    search(@Query("name") movieTitle: string) {
        return `We are searching for a movie with a title: ${movieTitle}`;
    }
    
    @Get("/:id")
    getOne(@Param("id") id: string) {
        return id;
    }

    @Post()
    postOne(@Body() name: string) {
        return name;
    }

    @Patch("/:id")
    patch(@Param("id") movieId: string, @Body() movieData) {
        return {
            movie_id: movieId,
            ...movieData
        };
    }

    @Delete("/:id")
    delete(@Param("id") movidId: string) {
        return movidId;
    }

}
