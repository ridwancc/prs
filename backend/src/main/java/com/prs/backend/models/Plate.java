package com.prs.backend.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="plate")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Plate implements java.io.Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int plateid;

    @Column (name = "vrm", nullable=false, unique=true)
    private String vrm;
    
    @Column (name = "price", nullable=false)
    private int price;

    @Column (name = "status", nullable=false, columnDefinition = "TEXT CHECK (status in ('sold', 'available'))")
    private String status;

    public Plate() {
        
    }

    public Plate(String vrm, int price) {
        this.vrm = vrm;
        this.price = price;
        this.status = "available";
    }    

    public int getPlateid() {
        return plateid;
    }

    public void setPlateid(int plateid) {
        this.plateid = plateid;
    }

    public String getVrm() {
        return vrm;
    }

    public void setVrm(String vrm) {
        this.vrm = vrm;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
