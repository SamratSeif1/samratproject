package com.wall.painting.customer.repository;

import com.wall.painting.customer.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerREPO extends JpaRepository<Customer, Integer> {
    Optional<Customer> findByEmail(String email);
}
