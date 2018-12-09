package com.niklas.tvtracker.repositories;


import com.niklas.tvtracker.domain.Series;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeriesRepository extends CrudRepository<Series, Long> {

    Series findByTitle(String title);

    @Override
    Iterable<Series> findAll();
}
