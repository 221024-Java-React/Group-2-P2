package com.revature.repositories;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.models.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

    Optional<Customer> findByEmail(String email);

    @Query(value = "SELECT attribute_bytes FROM spring_session_attributes", nativeQuery = true)
    List<byte[]> getSpringSessionAttributes();
    
}
