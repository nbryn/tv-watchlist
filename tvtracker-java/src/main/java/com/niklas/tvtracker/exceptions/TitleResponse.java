package com.niklas.tvtracker.exceptions;

public class TitleResponse {

    private String title;

    public TitleResponse(String title) {
        this.title = title;
    }

    public String getMovieTitle() {
        return title;
    }

    public void setMovieTitle(String title) {
        this.title = title;
    }
}
