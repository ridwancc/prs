package com.prs.backend.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="vehicle")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Vehicle implements java.io.Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vehicleid;

    @Column (name = "make", nullable=false)
    private String make;

    @Column (name = "model", nullable=false)
    private String model;

    @Column (name = "vin", nullable=false, unique=true)
    private String vin;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="account", nullable=false)
    private Account account;

    public Vehicle() {
        
    }

    public Vehicle(String make, String model, String vin, Account account) {
        this.make = make;
        this.model = model;
        this.vin = vin;
        this.account = account;
    }

    public int getVehicleId() {
        return vehicleid;
    }

    public void setVehicleId(int vehicleId) {
        this.vehicleid = vehicleId;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
