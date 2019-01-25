package com.niklas.tvtracker.repositories;

import com.niklas.tvtracker.entities.VideoProduction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoProductionRepository extends JpaRepository<VideoProduction, Long> {

    VideoProduction findByTitle(String title);

    @Override
    List<VideoProduction> findAll();

    List<VideoProduction> findAllByVideoProductionLeader(String username);

}
