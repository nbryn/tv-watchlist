package com.niklas.tvtracker.repositories;

import com.niklas.tvtracker.domain.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {

    Movie findByTitle(String title);

    @Override
    Iterable<Movie> findAll();
}
