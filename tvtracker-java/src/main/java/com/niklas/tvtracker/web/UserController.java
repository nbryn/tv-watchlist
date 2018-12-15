package com.niklas.tvtracker.web;

import com.niklas.tvtracker.domain.User;
import com.niklas.tvtracker.services.ErrorService;
import com.niklas.tvtracker.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private ErrorService errorService;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {


        ResponseEntity<?> errorMap = errorService.validationService(result);
        if(errorMap != null) return errorMap;

        User user1 = userService.saveUser(user);

        return new ResponseEntity<User>(user1, HttpStatus.CREATED);

    }
}
