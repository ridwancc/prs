package com.prs.backend.models;

import javax.persistence.*;

@Entity
@Table(name="vehicleregistration")
public class VehicleRegistration implements java.io.Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int registrationid;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="plate", nullable=false, unique=true)
    private Plate plate;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="account", nullable=false)
    private Account account;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="vehicle", nullable=true, unique=true)
    private Vehicle vehicle;
    
    public VehicleRegistration() {

    }

    public VehicleRegistration(Plate plate, Account account, Vehicle vehicle) {
        this.plate = plate;
        this.account = account;
        this.vehicle = vehicle;
    }

    public int getRegistrationId() {
        return registrationid;
    }

    public void setRegistrationId(int registrationid) {
        this.registrationid = registrationid;
    }

    public Plate getPlate() {
        return plate;
    }

    public void setPlate(Plate plate) {
        this.plate = plate;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
   
}
