package com.niklas.tvtracker.services;

import com.niklas.tvtracker.domain.TvShow;
import com.niklas.tvtracker.exceptions.TitleException;
import com.niklas.tvtracker.repositories.TvShowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TvShowService {

    @Autowired
    private TvShowRepository tvShowRepository;

    public TvShow saveTvShow(TvShow tvShow) {
        try {
            tvShow.setTitle(tvShow.getTitle().toUpperCase());
            return tvShowRepository.save(tvShow);
        } catch (Exception e) {
            throw new TitleException("Title '"+tvShow.getTitle().toUpperCase()+"' already exists");
        }
    }

    public TvShow findTvShowById(String tvShowId) {

        TvShow tvShow = tvShowRepository.findByTitle(tvShowId.toUpperCase());

        if(tvShow == null) {
            throw new TitleException("TvShow '"+tvShowId+"' does not exist");

        }

        return tvShow;
    }

    public Iterable<TvShow> findAllTvShows() {

        return tvShowRepository.findAll();
    }

    public void deleteTvShowByTitle(String title) {

        TvShow tvShow = tvShowRepository.findByTitle(title.toUpperCase());

        if(tvShow == null) {
            throw new TitleException("TvShow '"+title+"' does not exist");
        }

        tvShowRepository.delete(tvShow);
    }
}
