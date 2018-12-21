package com.niklas.tvtracker.services;

import com.niklas.tvtracker.domain.User;
import com.niklas.tvtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        if(user == null) throw new UsernameNotFoundException("User does not exist");
        return user;
    }

    @Transactional
    public User getUserById(Long id) {
        User user = userRepository.getById(id);
        if(user == null) throw new UsernameNotFoundException("User does not exist");
        return user;
    }
}
