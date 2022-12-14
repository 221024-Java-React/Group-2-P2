package com.revature.services;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.User;
import com.revature.repositories.UserRepository;

@Service
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public List<User> findAllUsers() {
        List<User> users = userRepository.findAll();
        List<User> returnedUsers = new ArrayList<>();
        for(User u : users) {
            returnedUsers.add(new User(u.getProfileName(), u.getId(), u.getPosts()));
        }
        return returnedUsers;
    }

    public List<User> findUsersByProfileName(String profileName) {
        List<User> users = userRepository.findUsersByProfileName(profileName.toLowerCase());
        List<User> returnedUsers = new ArrayList<>();
        for(User u : users) {
            returnedUsers.add(new User(u.getProfileName(), u.getId(), u.getPosts()));
        }
        return returnedUsers;
    }

    public User findUserById(int id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            return new User(user.get().getProfileName(), user.get().getId(), user.get().getPosts());
        }
        return null;
    }

    public User login(User user) {
        Optional<User> tempUser = userRepository.findUserByEmail(user.getEmail());
        if (tempUser.isPresent()) {
            if (passwordEncoder.matches(user.getPassword(), tempUser.get().getPassword())) {
                return tempUser.get();
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public List<User> getOnlineUsers() {
        List<byte[]> sessionsAttributes = new ArrayList<>(userRepository.getSpringSessionAttributes());
        Set<Integer> currentSessions = new HashSet<>();
        List<User> users = new ArrayList<>();

        for(byte[] s : sessionsAttributes) {
            ObjectInput in;
            try {
                in = new ObjectInputStream(new ByteArrayInputStream(s));
                currentSessions.add(Integer.parseInt(in.readObject().toString()));
            } catch (ClassNotFoundException e) {
                    e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        for(int i : currentSessions) {
            users.add(findUserById(i));
        }

        return users;
    }

    public int getSessionAttributesById(String id) {
        List<byte[]> sessionsAttributes = new ArrayList<>(userRepository.getSessionAttributesById(id));
        List<Integer> currentSessions = new ArrayList<>();
        for(byte[] s : sessionsAttributes) {
            ObjectInput in;
            try {
                in = new ObjectInputStream(new ByteArrayInputStream(s));
                currentSessions.add(Integer.parseInt(in.readObject().toString()));
            } catch (ClassNotFoundException e) {
                    e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return currentSessions.get(0);
    }

    public String getSessionById(String sessionId) {
        String sessionAttributes = userRepository.getSessionById(sessionId);
        return sessionAttributes;
    }

    public void removeSessionById(String cookieId) {
        userRepository.removeSessionById(cookieId);
    }

    public User findUserByEmail(String email) {
        Optional<User> user = userRepository.findUserByEmail(email);
        if(user.isPresent()){
            return user.get();
        }
        return null;
    }
}
