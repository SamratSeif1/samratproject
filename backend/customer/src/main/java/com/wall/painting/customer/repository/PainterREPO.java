package com.wall.painting.customer.repository;

import com.wall.painting.customer.model.Painter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface PainterREPO extends JpaRepository<Painter,Integer> {
}
