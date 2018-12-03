package com.niklas.tvtracker.exceptions;

public class MovieTitleResponse {

    private String title;

    public MovieTitleResponse(String title) {
        this.title = title;
    }

    public String getMovieTitle() {
        return title;
    }

    public void setMovieTitle(String title) {
        this.title = title;
    }
}
