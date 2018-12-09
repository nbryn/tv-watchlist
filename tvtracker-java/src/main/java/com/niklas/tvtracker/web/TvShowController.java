package com.niklas.tvtracker.web;

import com.niklas.tvtracker.domain.TvShow;
import com.niklas.tvtracker.services.ErrorService;
import com.niklas.tvtracker.services.TvShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/tvshow")
@CrossOrigin
public class TvShowController {

    @Autowired
    private TvShowService tvShowService;

    @Autowired private ErrorService errorService;

    @PostMapping("")
    public ResponseEntity<?> newTvShow(@Valid @RequestBody TvShow tvShow, BindingResult result) {

        ResponseEntity<?> errorMap = errorService.validationService(result);
        if(errorMap != null) return errorMap;

        TvShow tvShow1 = tvShowService.saveTvShow(tvShow);
        return new ResponseEntity<TvShow>(tvShow1, HttpStatus.CREATED);
    }

    @GetMapping("/{tvShowId})")
    public ResponseEntity<?> getMovieById(@PathVariable String tvShowId) {

        TvShow tvShow = tvShowService.findTvShowById(tvShowId);

        return new ResponseEntity<TvShow>(tvShow, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<TvShow> getAllTvShows() {

        return tvShowService.findAllTvShows();
    }

    @DeleteMapping("/{title}")
    public ResponseEntity<?> deleteMovie(@PathVariable String title) {
        tvShowService.deleteTvShowByTitle(title);

        return new ResponseEntity<String>("TvShow with title '"+title+"' was deleted", HttpStatus.OK);
    }

}
