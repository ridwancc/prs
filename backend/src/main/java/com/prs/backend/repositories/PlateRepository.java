package com.prs.backend.repositories;

import com.prs.backend.models.Plate;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "plate", path="plate")
public interface PlateRepository extends CrudRepository<Plate, Integer> {
    
}
