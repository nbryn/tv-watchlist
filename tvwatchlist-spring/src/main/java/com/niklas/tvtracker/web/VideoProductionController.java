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

@CrossOrigin
@RestController
@RequestMapping("/video")
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
    public ResponseEntity<?> getVideoProductionByTitle(@PathVariable String title, Principal principal) {

        VideoProduction videoProduction = videoProductionService.findVideoProductionByTitle(title, principal.getName());

        return new ResponseEntity<VideoProduction>(videoProduction, HttpStatus.OK);
    }

    @GetMapping("/all")
    public List<VideoProduction> getAll(Principal principal) {

        return videoProductionService.findAll(principal.getName());
    }

    @GetMapping("/series")
    public List<VideoProduction> getAllSeries(Principal principal) {

        return videoProductionService.findAllSeries(principal.getName());
    }

    @GetMapping("/tvShow")
    public List<VideoProduction> getAllTvShows(Principal principal) {

        return videoProductionService.findAllTvShows(principal.getName());
    }

    @GetMapping("/movie")
    public List<VideoProduction> getAllMovies(Principal principal) {

        return videoProductionService.findAllMovies(principal.getName());
    }

    @DeleteMapping("/{title}")
    public ResponseEntity<?> deleteVideoProduction(@PathVariable String title, Principal principal) {
        videoProductionService.deleteMovieByTitle(title, principal.getName());

        return new ResponseEntity<String>("Item with title '"+title+"' was deleted", HttpStatus.OK);
    }


}
