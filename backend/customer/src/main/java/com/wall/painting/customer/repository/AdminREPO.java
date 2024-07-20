package com.wall.painting.customer.repository;

import com.wall.painting.customer.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminREPO extends JpaRepository<Admin,Integer> {
}
