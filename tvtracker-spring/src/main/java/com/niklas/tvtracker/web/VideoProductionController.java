package com.niklas.tvtracker.web;

import com.niklas.tvtracker.domain.VideoProduction;
import com.niklas.tvtracker.services.ErrorService;
import com.niklas.tvtracker.services.VideoProductionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/video")
@CrossOrigin
public class VideoProductionController {

    @Autowired
    private VideoProductionService videoProductionService;

    @Autowired private ErrorService errorService;

    @PostMapping("")
    public ResponseEntity<?> newVideoProduction(@Valid @RequestBody VideoProduction videoProduction, BindingResult result, Principal principal) {

        ResponseEntity<?> errorMap = errorService.validationService(result);
        if(errorMap != null) return errorMap;

        VideoProduction videoProduction1 = videoProductionService.saveVideoProduction(videoProduction, principal.getName());
        return new ResponseEntity<VideoProduction>(videoProduction1, HttpStatus.CREATED);
    }

    @GetMapping("/{title}")
    public ResponseEntity<?> getVideoProductionByTitle(@PathVariable String title) {

        VideoProduction videoProduction = videoProductionService.findVideoProductionByTitle(title);

        return new ResponseEntity<VideoProduction>(videoProduction, HttpStatus.OK);
    }

    @GetMapping("/all")
    public List<VideoProduction> getAll() {

        return videoProductionService.findAll();
    }

    @GetMapping("/series")
    public List<VideoProduction> getAllSeries() {

        return videoProductionService.findAllSeries();
    }

    @GetMapping("/tvShow")
    public List<VideoProduction> getAllTvShows() {

        return videoProductionService.findAllTvShows();
    }

    @GetMapping("/movie")
    public List<VideoProduction> getAllMovies() {

        return videoProductionService.findAllMovies();
    }

    @DeleteMapping("/{title}")
    public ResponseEntity<?> deleteVideoProduction(@PathVariable String title) {
        videoProductionService.deleteMovieByTitle(title);

        return new ResponseEntity<String>("VideoProduction with title '"+title+"' was deleted", HttpStatus.OK);
    }


}
