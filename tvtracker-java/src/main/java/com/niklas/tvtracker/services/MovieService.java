package com.niklas.tvtracker.services;

import com.niklas.tvtracker.domain.Movie;
import com.niklas.tvtracker.exceptions.TitleException;
import com.niklas.tvtracker.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public Movie saveMovie(Movie movie) {
        try {
            movie.setTitle(movie.getTitle().toUpperCase());
            return movieRepository.save(movie);
        } catch (Exception e) {
            throw new TitleException("Title '"+movie.getTitle().toUpperCase()+"' already exists");
        }
    }

    public Movie findMovieByTitle(String title) {

        Movie movie = movieRepository.findByTitle(title.toUpperCase());

        if(movie == null) {
            throw new TitleException("Movie '"+title+"' does not exist");

        }

        return movie;
    }

    public Iterable<Movie> findAllMovies() {

        return movieRepository.findAll();
    }

    public void deleteMovieByTitle(String title) {

        Movie movie = movieRepository.findByTitle(title.toUpperCase());

        if(movie == null) {
            throw new TitleException("Movie '"+title+"' does not exist");
        }

        movieRepository.delete(movie);
    }
}
