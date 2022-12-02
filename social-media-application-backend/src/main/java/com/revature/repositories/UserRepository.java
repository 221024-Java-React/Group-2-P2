package com.revature.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

    Optional<User> findUserByEmail(String email);

    @Query(value = "SELECT attribute_bytes FROM spring_session_attributes", nativeQuery = true)
    List<byte[]> getSpringSessionAttributes();

    @Query(value = "SELECT * FROM users WHERE LOWER(profile_name) LIKE LOWER(?1)", nativeQuery = true)
    List<User> findUsersByProfileName(String profileName);

    
}