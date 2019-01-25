package com.niklas.tvtracker.services;

import com.niklas.tvtracker.entities.User;
import com.niklas.tvtracker.exceptions.UsernameException;
import com.niklas.tvtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User saveUser(User user) {

        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setUsername(user.getUsername());
            user.setVerifyPassword("");

            return userRepository.save(user);
        } catch (Exception e) {
            throw new UsernameException("Username '"+user.getUsername()+"' already exists");
        }
    }
}
