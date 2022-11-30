package com.revature.controllers;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Customer;
import com.revature.services.CustomerService;


@RestController
@RequestMapping("/")
public class CustomerController {
    
    private CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }
    
    @PostMapping("/customers/create")
    public HttpStatus createUser(@RequestBody Customer customer){
        ResponseEntity<String> response;
        Customer newCustomer = this.customerService.createCustomer(customer);
        if(newCustomer != null){
            response = new ResponseEntity<>("Customer created successfully", HttpStatus.CREATED);
        } else {
            response = new ResponseEntity<>("Customer already exists", HttpStatus.CONFLICT);
        }
        return response.getStatusCode();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Customer customer, HttpSession session) {
        Customer tempCustomer = customerService.login(customer);
        if(tempCustomer != null){
            session.setAttribute("CurrentUser", tempCustomer.getEmail());
            System.out.println(session);
            return new ResponseEntity<>("Login Successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/logout")
    public void logout(HttpSession session, HttpServletResponse response) throws IOException {
        session.invalidate();
        response.sendRedirect("http://localhost:8090/");
    }

    @GetMapping("/customers/all")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        return new ResponseEntity<>(this.customerService.findAllCustomers(), HttpStatus.OK);
    }

    @GetMapping("/customers/sessions")
    public ResponseEntity<List<String>> getActiveSessions() {
        return new ResponseEntity<>(this.customerService.getActiveSessions(), HttpStatus.OK);
    }

    @GetMapping("/customers/{email}")
    public ResponseEntity<Customer> getCustomerByEmail(@PathVariable String email) {
        Customer customer = this.customerService.findCustomerByEmail(email);
        if(customer != null){
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}