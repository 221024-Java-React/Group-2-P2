package com.revature.services;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.revature.models.Customer;
import com.revature.repositories.CustomerRepository;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Customer createCustomer(Customer customer){
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        return customerRepository.save(customer);
    }

    public List<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer findCustomerByEmail(String email) {
        return customerRepository.findByEmail(email).get();
    }

    public Customer login(Customer customer) {
        Optional<Customer> tempCustomer = customerRepository.findByEmail(customer.getEmail());
        if (tempCustomer.isPresent()) {
            if (passwordEncoder.matches(customer.getPassword(), tempCustomer.get().getPassword())) {
                return tempCustomer.get();
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public List<String> getActiveSessions() {
        List<byte[]> sessionsAttributes = new ArrayList<>(customerRepository.getSpringSessionAttributes());
        List<String> currentSessions = new ArrayList<>();

        for(byte[] s : sessionsAttributes) {
            ObjectInput in;
            try {
                in = new ObjectInputStream(new ByteArrayInputStream(s));
                currentSessions.add(in.readObject().toString());
            } catch (ClassNotFoundException e) {
                    e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return currentSessions;
    }
}
