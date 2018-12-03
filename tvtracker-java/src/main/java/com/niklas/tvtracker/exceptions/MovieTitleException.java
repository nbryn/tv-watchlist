package com.niklas.tvtracker.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class MovieTitleException extends RuntimeException {

    public MovieTitleException(String message) {
        super(message);
    }
}
