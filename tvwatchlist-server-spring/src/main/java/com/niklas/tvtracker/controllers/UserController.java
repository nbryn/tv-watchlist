package com.niklas.tvtracker.controllers;

import com.niklas.tvtracker.entities.User;
import com.niklas.tvtracker.payload.JWTLoginResponse;
import com.niklas.tvtracker.payload.LoginRequest;
import com.niklas.tvtracker.security.TokenProvider;
import com.niklas.tvtracker.services.ErrorService;
import com.niklas.tvtracker.services.UserService;
import com.niklas.tvtracker.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static com.niklas.tvtracker.security.SecurityCockpit.TOKEN;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private ErrorService errorService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authManager;


    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result) {
        ResponseEntity<?> errorMap = errorService.validationService(result);
        if(errorMap != null) return errorMap;

        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN + tokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JWTLoginResponse(true, jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {

        userValidator.validate(user, result);

        ResponseEntity<?> errorMap = errorService.validationService(result);
        if(errorMap != null) return errorMap;

        User user1 = userService.saveUser(user);

        return new ResponseEntity<User>(user1, HttpStatus.CREATED);

    }
}
