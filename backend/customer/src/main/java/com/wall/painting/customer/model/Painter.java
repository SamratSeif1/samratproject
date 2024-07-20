package com.wall.painting.customer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Painter {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private  int P_id;
    private String P_name;
    private String P_phoneNumber;

}
