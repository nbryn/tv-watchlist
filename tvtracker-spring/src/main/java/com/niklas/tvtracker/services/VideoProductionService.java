package com.niklas.tvtracker.services;

import com.niklas.tvtracker.domain.User;
import com.niklas.tvtracker.domain.VideoProduction;
import com.niklas.tvtracker.exceptions.TitleException;
import com.niklas.tvtracker.repositories.UserRepository;
import com.niklas.tvtracker.repositories.VideoProductionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VideoProductionService {

    @Autowired
    private VideoProductionRepository videoProductionRepository;

    @Autowired
    private UserRepository userRepository;

    public VideoProduction saveVideoProduction(VideoProduction videoProduction, String username) {
        try {

            User user = userRepository.findByUsername(username);
            videoProduction.setUser(user);
            videoProduction.setTitle(videoProduction.getTitle().toUpperCase());

            videoProduction.setTitle(videoProduction.getTitle().toUpperCase());
            return videoProductionRepository.save(videoProduction);
        } catch (Exception e) {
            throw new TitleException("Title '"+ videoProduction.getTitle().toUpperCase()+"' already exists");
        }
    }

    public VideoProduction findVideoProductionByTitle(String title) {

        VideoProduction videoProduction = videoProductionRepository.findByTitle(title.toUpperCase());

        if(videoProduction == null) {
            throw new TitleException("VideoProduction '"+title+"' does not exist");

        }

        return videoProduction;
    }

    public List<VideoProduction> findAllSeries() {
        List<VideoProduction> all = videoProductionRepository.findAll();

        List<VideoProduction> series = all.stream()
             .filter(m -> m.getType().toUpperCase().equals("SERIES"))
             .collect(Collectors.toList());

        return series;

    }

    public List<VideoProduction> findAllMovies() {
        List<VideoProduction> all = videoProductionRepository.findAll();

        List<VideoProduction> movies = all.stream()
                .filter(m -> m.getType().toUpperCase().equals("MOVIE"))
                .collect(Collectors.toList());

        return movies;

    }

    public List<VideoProduction> findAllTvShows() {
        List<VideoProduction> all = videoProductionRepository.findAll();

        List<VideoProduction> tvShows = all.stream()
                .filter(m -> m.getType().toUpperCase().equals("TVSHOW"))
                .collect(Collectors.toList());

        return tvShows;

    }

    public List<VideoProduction> findAll() {

        return videoProductionRepository.findAll();
    }

    public void deleteMovieByTitle(String title) {

        VideoProduction videoProduction = videoProductionRepository.findByTitle(title.toUpperCase());

        if(videoProduction == null) {
            throw new TitleException("VideoProduction '"+title+"' does not exist");
        }

        videoProductionRepository.delete(videoProduction);
    }
}
