package com.revature.socialmediaapplicationbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ServletComponentScan
@ComponentScan("com.revature")
@EnableJpaRepositories("com.revature.repositories")
@EntityScan("com.revature.models")
@SpringBootApplication
public class SocialMediaApplicationBackendApplication {
    
	public static void main(String[] args) {
        SpringApplication.run(SocialMediaApplicationBackendApplication.class, args);
    }
}