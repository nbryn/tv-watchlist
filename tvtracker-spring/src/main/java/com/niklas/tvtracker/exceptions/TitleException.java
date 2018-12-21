package com.niklas.tvtracker.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class TitleException extends RuntimeException {

    public TitleException(String message) {
        super(message);
    }

    public TitleException() {

    }
}
