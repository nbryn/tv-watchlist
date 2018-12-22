package com.niklas.tvtracker.exceptions;

public class TitleResponse {

    private String title;

    public TitleResponse(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
