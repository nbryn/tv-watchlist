package com.niklas.tvtracker.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class VideoProductionNotFoundException extends RuntimeException {

    public VideoProductionNotFoundException(String message) {
        super(message);
    }
}
