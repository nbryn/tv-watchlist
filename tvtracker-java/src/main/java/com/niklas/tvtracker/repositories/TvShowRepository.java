package com.niklas.tvtracker.repositories;

import com.niklas.tvtracker.domain.TvShow;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TvShowRepository extends CrudRepository<TvShow, Long> {

    TvShow findByTitle(String title);

    @Override
    Iterable<TvShow> findAll();
}
