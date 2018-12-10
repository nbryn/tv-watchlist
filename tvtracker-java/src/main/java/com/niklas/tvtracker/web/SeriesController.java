package com.niklas.tvtracker.web;

import com.niklas.tvtracker.domain.Series;
import com.niklas.tvtracker.services.ErrorService;
import com.niklas.tvtracker.services.SeriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/series")
@CrossOrigin
public class SeriesController {

        @Autowired
        private SeriesService seriesService;

        @Autowired private ErrorService errorService;

        @PostMapping("")
        public ResponseEntity<?> newSeries(@Valid @RequestBody Series series, BindingResult result) {

            ResponseEntity<?> errorMap = errorService.validationService(result);
            if(errorMap != null) return errorMap;

            Series series1 = seriesService.saveSeries(series);
            return new ResponseEntity<Series>(series1, HttpStatus.CREATED);
        }

        @GetMapping("/{title}")
        public ResponseEntity<?> getSeriesById(@PathVariable String title) {

            Series series = seriesService.findSeriesByTitle(title);

            return new ResponseEntity<Series>(series, HttpStatus.OK);
        }

        @GetMapping("/all")
        public Iterable<Series> getAllSeries() {

            return seriesService.findAllSeries();
        }

        @DeleteMapping("/{title}")
        public ResponseEntity<?> deleteSeries(@PathVariable String title) {
            seriesService.deleteSeriesByTitle(title);

            return new ResponseEntity<String>("Series with title '"+title+"' was deleted", HttpStatus.OK);
        }
}
