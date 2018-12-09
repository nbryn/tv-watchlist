package com.niklas.tvtracker.services;

import com.niklas.tvtracker.domain.Series;
import com.niklas.tvtracker.exceptions.TitleException;
import com.niklas.tvtracker.repositories.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeriesService {

    @Autowired
    private SeriesRepository seriesRepository;

    public Series saveSeries(Series Series) {
        try {
            Series.setTitle(Series.getTitle().toUpperCase());
            return seriesRepository.save(Series);
        } catch (Exception e) {
            throw new TitleException("Title '"+Series.getTitle().toUpperCase()+"' already exists");
        }
    }

    public Series findSeriesById(String seriesId) {

        Series series = seriesRepository.findByTitle(seriesId.toUpperCase());

        if(series == null) {
            throw new TitleException("Series '"+seriesId+"' does not exist");

        }

        return series;
    }

    public Iterable<Series> findAllSeries() {

        return seriesRepository.findAll();
    }

    public void deleteSeriesByTitle(String title) {

        Series series = seriesRepository.findByTitle(title.toUpperCase());

        if(series == null) {
            throw new TitleException("Series '"+title+"' does not exist");
        }

        seriesRepository.delete(series);
    }
}
