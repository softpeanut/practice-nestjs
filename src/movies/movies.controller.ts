import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieservice: MoviesService) {}

    @Get()
    getAll() {
        return "This will return all movies";
    }
    
    @Get("/:id")
    getOne(@Param("id") id: string) {
        return id;
    }

    @Post()
    postOne(@Body() name: string) {
        return name;
    }

}
