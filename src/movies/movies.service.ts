import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[]  = [];

    public getAll(): Movie[] {
        return this.movies;
    }

    public getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if(!movie) {
            throw new NotFoundException("Movie Not Found");
        }
        return movie;
    }

    public deleteOne(id: number) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    public create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        });
    }

    public update(id: number, updateData: UpdateMovieDto) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({
            ...movie,
            ...updateData
        })
    }
 
}
