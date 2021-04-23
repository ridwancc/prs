package com.prs.backend.repositories;

import com.prs.backend.models.Account;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "account", path="account")
public interface AccountsRepository extends CrudRepository<Account, Integer>{
    Account findByEmail(String email);
    Boolean existsByEmail(String email);

}
