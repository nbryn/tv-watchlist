package com.niklas.tvtracker.web;

import com.niklas.tvtracker.domain.Movie;
import com.niklas.tvtracker.services.ErrorService;
import com.niklas.tvtracker.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/movie")
@CrossOrigin
public class MovieController {

    @Autowired
    private MovieService movieService;

    @Autowired private ErrorService errorService;

    @PostMapping("")
    public ResponseEntity<?> newMovie(@Valid @RequestBody Movie movie, BindingResult result) {

        ResponseEntity<?> errorMap = errorService.validationService(result);
        if(errorMap != null) return errorMap;

        Movie movie1 = movieService.saveMovie(movie);
        return new ResponseEntity<Movie>(movie1, HttpStatus.CREATED);
    }

    @GetMapping("/{title}")
    public ResponseEntity<?> getMovieById(@PathVariable String title) {

        Movie movie = movieService.findMovieByTitle(title);

        return new ResponseEntity<Movie>(movie, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Movie> getAllMovies() {

        return movieService.findAllMovies();
    }

    @DeleteMapping("/{title}")
    public ResponseEntity<?> deleteMovie(@PathVariable String title) {
        movieService.deleteMovieByTitle(title);

        return new ResponseEntity<String>("Movie with title '"+title+"' was deleted", HttpStatus.OK);
    }

}
