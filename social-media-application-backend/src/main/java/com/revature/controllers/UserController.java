package com.revature.controllers;

import java.io.IOException;
import java.net.http.HttpRequest;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.revature.models.User;
import com.revature.services.UserService;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/home")
    public ResponseEntity<String> checkIfLoggedIn(HttpSession session, String cookieID) {
        if(!session.getId().equals(cookieID)) {
            return new ResponseEntity("Not Logged In", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity("Currently Logged In", HttpStatus.OK);

    }
    
    @PostMapping("/users/register")
    public HttpStatus createUser(@RequestBody User user, HttpServletResponse hsr) throws IOException{
        ResponseEntity<String> response;
        User newUser = this.userService.createUser(user);
        if(newUser != null){
            response = new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
            hsr.sendRedirect("/");
        } else {
            response = new ResponseEntity<>("User already exists", HttpStatus.CONFLICT);
        }
        return response.getStatusCode();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user, HttpSession session) {
        User tempUser = userService.login(user);
        if(tempUser != null){
            session.setAttribute("CurrentUser", tempUser.getId());
            return new ResponseEntity<>(session.getId(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/log-out")
    public ResponseEntity<String> logout(HttpSession session){
        session.invalidate();
        return new ResponseEntity<>("Logged out Successfully", HttpStatus.OK);
    }

    @GetMapping("/users/all")
    public ResponseEntity<List<User>> findAllUsers() {
        return new ResponseEntity<>(this.userService.findAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/users/sessions")
    public ResponseEntity<Set<Integer>> getActiveSessions() {
        return new ResponseEntity<>(this.userService.getActiveSessions(), HttpStatus.OK);
    }

    @GetMapping("/users/profilename/{profileName}")
    public ResponseEntity<List<User>> findUsersByProfileName(@PathVariable String profileName) {
        List<User> users = this.userService.findUsersByProfileName(profileName);
        if(users.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
    }

    @GetMapping("/users/id/{id}")
    public ResponseEntity<User> findUserById(@PathVariable int id) {
        User user = this.userService.findUserById(id);
        if(user == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
    }
}