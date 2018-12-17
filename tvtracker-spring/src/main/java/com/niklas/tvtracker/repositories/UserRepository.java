package com.niklas.tvtracker.repositories;

import com.niklas.tvtracker.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

   User findByUsername(String username);
   Optional<User> findById(Long id);


}
