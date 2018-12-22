package com.niklas.tvtracker.services;

import com.niklas.tvtracker.domain.User;
import com.niklas.tvtracker.domain.VideoProduction;
import com.niklas.tvtracker.exceptions.TitleException;
import com.niklas.tvtracker.exceptions.VideoProductionNotFoundException;
import com.niklas.tvtracker.repositories.UserRepository;
import com.niklas.tvtracker.repositories.VideoProductionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VideoProductionService {

    @Autowired
    private VideoProductionRepository videoProductionRepository;

    @Autowired
    private UserRepository userRepository;

    public VideoProduction saveVideoProduction(VideoProduction videoProduction, String username) {

        if(videoProduction.getId() != null) {
            VideoProduction currentVideoProd = videoProductionRepository.findByTitle(videoProduction.getTitle());

            if((currentVideoProd != null) && !currentVideoProd.getVideoProductionLeader().equals(username)) {
                throw new VideoProductionNotFoundException("Item does not exist");

            } else if(currentVideoProd == null) {
                throw new VideoProductionNotFoundException("Item '"+videoProduction.getTitle()+"'does not exist");
            }
        }
        try {
            User user = userRepository.findByUsername(username);
            videoProduction.setUser(user);
            videoProduction.setVideoProductionLeader(user.getUsername());

            videoProduction.setTitle(videoProduction.getTitle().toUpperCase());

            return videoProductionRepository.save(videoProduction);
        } catch (Exception e) {
            throw new TitleException("Title '"+ videoProduction.getTitle().toUpperCase()+"' already exists");
        }
    }

    public VideoProduction findVideoProductionByTitle(String title, String username) {

        VideoProduction videoProduction = videoProductionRepository.findByTitle(title.toUpperCase());

        if(videoProduction == null) {
            throw new TitleException("Item '"+title+"' does not exist");
        }

        if(!videoProduction.getVideoProductionLeader().equals(username)) {
            throw new VideoProductionNotFoundException("Item '"+title+"' does not exist");
        }

        return videoProduction;
    }

    public List<VideoProduction> findAllSeries(String username) {
        List<VideoProduction> all = videoProductionRepository.findAllByVideoProductionLeader(username);

        List<VideoProduction> series = all.stream()
             .filter(m -> m.getType().toUpperCase().equals("SERIES"))
             .collect(Collectors.toList());

        Collections.sort(series, (s1, s2) -> (int) (s2.getRating() - s1.getRating()));

        return series;
    }

    public List<VideoProduction> findAllMovies(String username) {
        List<VideoProduction> all = videoProductionRepository.findAllByVideoProductionLeader(username);

        List<VideoProduction> movies = all.stream()
                .filter(m -> m.getType().toUpperCase().equals("MOVIE"))
                .collect(Collectors.toList());

        Collections.sort(movies, (m1, m2) -> (int) (m2.getRating() - m1.getRating()));

        return movies;
    }

    public List<VideoProduction> findAllTvShows(String username) {
        List<VideoProduction> all = videoProductionRepository.findAllByVideoProductionLeader(username);

        List<VideoProduction> tvShows = all.stream()
                .filter(m -> m.getType().toUpperCase().equals("TVSHOW"))
                .collect(Collectors.toList());

        Collections.sort(tvShows, (t1, t2) -> (int) (t2.getRating() - t1.getRating()));

        return tvShows;
    }

    public List<VideoProduction> findAll(String username) {

        return videoProductionRepository.findAllByVideoProductionLeader(username);
    }

    public void deleteMovieByTitle(String title, String username) {

        videoProductionRepository.delete(findVideoProductionByTitle(title, username));
    }
}
