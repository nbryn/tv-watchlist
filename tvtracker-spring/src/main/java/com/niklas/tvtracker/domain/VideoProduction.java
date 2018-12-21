package com.niklas.tvtracker.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class VideoProduction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Title is required")
    @Column(updatable = false, unique = true)
    private String title;
    @NotBlank(message = "Genre is required")
    private String genre;
    @NotNull(message = "IMDB rating is required")
    private double rating;
    @NotBlank(message = "Description is required")
    private String description;
    @NotBlank(message = "Type is required")
    private String type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User user;

    private String videoProductionLeader;


    public VideoProduction() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getVideoProductionLeader() {
        return videoProductionLeader;
    }

    public void setVideoProductionLeader(String videoProductionLeader) {
        this.videoProductionLeader = videoProductionLeader;
    }
}



