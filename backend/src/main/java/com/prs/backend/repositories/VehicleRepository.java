package com.prs.backend.repositories;

import com.prs.backend.models.Vehicle;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "vehicle", path="vehicle")
public interface VehicleRepository extends CrudRepository<Vehicle, Integer>{
    Boolean existsByVin(String vin);
}