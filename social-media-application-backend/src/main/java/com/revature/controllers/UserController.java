package com.revature.controllers;

import java.util.Base64;
import java.util.List;

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

import com.revature.models.LoginResponse;
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

    @GetMapping("/{cookieId}")
    public ResponseEntity<User> checkIfLoggedIn(@PathVariable String cookieId) {
        byte[] decodedCookieIdBytes = Base64.getDecoder().decode(cookieId);
        String decodedCookieId = new String(decodedCookieIdBytes);
        User user = userService.findUserById(userService.getSessionAttributesById(decodedCookieId));
        if(userService.getSessionById(decodedCookieId) != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);

    }
    
    @PostMapping("/users/register")
    public ResponseEntity<String> createUser(@RequestBody User user){
        if(userService.findUserByEmail(user.getEmail()) == null){
            userService.createUser(user);
            return new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
        }
        return new ResponseEntity<>("User already exists", HttpStatus.CONFLICT);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody User user, HttpSession session) {
        User tempUser = userService.login(user);
        if(tempUser != null){
            session.setAttribute("CurrentUser", tempUser.getId());
            LoginResponse response = new LoginResponse(tempUser, Base64.getEncoder().encodeToString(session.getId().getBytes()));
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/log-out/{cookieId}")
    public ResponseEntity<String> logout(@PathVariable String cookieId, HttpSession session){
        byte[] decodedCookieIdBytes = Base64.getDecoder().decode(cookieId);
        String decodedCookieId = new String(decodedCookieIdBytes);
        userService.removeSessionById(decodedCookieId);
        return new ResponseEntity<>("Logged out Successfully", HttpStatus.OK);
    }

    @GetMapping("/users/all")
    public ResponseEntity<List<User>> findAllUsers() {
        return new ResponseEntity<>(this.userService.findAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/users/onlineUsers")
    public ResponseEntity<List<User>> getOnlineUsers() {
        return new ResponseEntity<>(this.userService.getOnlineUsers(), HttpStatus.OK);
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