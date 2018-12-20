package com.niklas.tvtracker.security;

public class SecurityCockpit {

    public static final String SIGN_UP_URL = "/users/**";
    public static final String H2_URL = "h2-console/**";
    public static final String SECRET = "KeyToGenerateJWTs";
    public static final String TOKEN = "Bearer ";
    public static final String HEADER = "Authorization";
    public static final long EXPIRATION_TIME = 30_000;
}
