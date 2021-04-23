package com.prs.backend.models;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="account")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Account implements java.io.Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountid;

    @Column (name = "name", nullable=false)
    private String name;

    @Column (name = "email", unique=true, nullable=false)
    private String email;

    @OneToMany (fetch = FetchType.LAZY, targetEntity = Vehicle.class, mappedBy = "account")
    private List<Vehicle> vehicle;

    @OneToMany (fetch = FetchType.LAZY, targetEntity = VehicleRegistration.class, mappedBy = "account")
    private List<VehicleRegistration> vehicleregistration;

    public Account() {
        
    }
    
    public Account(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public int getAccountId() {
        return accountid;
    }

    public void setAccountId(int accountid) {
        this.accountid = accountid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setVehicle(List<Vehicle> vehicle) {
        this.vehicle = vehicle;
    }

    public List <Vehicle> getVehicle() {
        return vehicle;
    }

    public List <VehicleRegistration> getVehicleRegistration() {
        return vehicleregistration;
    }

    public void setVehicleRegistration(List<VehicleRegistration> vehicleregistration) {
        this.vehicleregistration = vehicleregistration;
    }

}


