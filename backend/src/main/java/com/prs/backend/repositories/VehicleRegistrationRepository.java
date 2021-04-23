package com.prs.backend.repositories;

import com.prs.backend.models.VehicleRegistration;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "vehicleregistration", path = "vehicleregistration")
public interface VehicleRegistrationRepository extends CrudRepository<VehicleRegistration, Integer> {
    
}
