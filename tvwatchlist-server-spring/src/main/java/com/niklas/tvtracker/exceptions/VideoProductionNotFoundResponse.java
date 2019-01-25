package com.niklas.tvtracker.exceptions;


public class VideoProductionNotFoundResponse {

    private String videoProdNotFound;

    public VideoProductionNotFoundResponse(String videoProdNotFound) {
        videoProdNotFound = videoProdNotFound;
    }

    public String getVideoProdNotFoundNotFound() {
        return videoProdNotFound;
    }

    public void setVideoProdNotFound(String videoProdNotFound) {
        videoProdNotFound = videoProdNotFound;
    }
}
