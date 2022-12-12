package com.revature.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Post;
import com.revature.models.User;
import com.revature.services.PostService;
import com.revature.services.UserService;


@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    
    @Autowired
    PostService postService;

    @Autowired
    UserService userService;

    @GetMapping("/all")
    public ResponseEntity<List<Post>> findAllPosts() {
        return new ResponseEntity<>(this.postService.findAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<List<Post>> findAllUserPosts(@PathVariable("id") int id) {
        return new ResponseEntity<>(this.postService.findAllUserPosts(id), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> findPostById(@PathVariable("id") int id) {
        return new ResponseEntity<>(postService.findPostById(id), HttpStatus.OK);
    }

    @PostMapping("/create/{cookieId}")
    public ResponseEntity<Post> createPost(@RequestBody Post post, @PathVariable String cookieId, HttpSession session) {
        byte[] decodedCookieIdBytes = Base64.getDecoder().decode(cookieId);
        String decodedCookieId = new String(decodedCookieIdBytes);
        post.setUserId(userService.getSessionAttributesById(decodedCookieId));
        return new ResponseEntity<>(postService.createPost(post), HttpStatus.CREATED);
    }

    @PostMapping("/like/{cookieId}/{postId}")
    public ResponseEntity<String> likePost(@PathVariable String cookieId, @PathVariable int postId) {
        byte[] decodedCookieIdBytes = Base64.getDecoder().decode(cookieId);
        String decodedCookieId = new String(decodedCookieIdBytes);
        User user = userService.findUserById(userService.getSessionAttributesById(decodedCookieId));
        Post post = postService.findPostById(postId);
        List<Integer> users = new ArrayList<>(post.getUsersLiked());

        if(users.contains(user.getId())) {
            users.remove(Integer.valueOf(user.getId()));
            post.setUsersLiked(users);
            postService.update(post);
            return new ResponseEntity<>("User Unliked Post", HttpStatus.OK);
        }
        users.add(user.getId());
        post.setUsersLiked(users);
        postService.update(post);
        return new ResponseEntity<>("User Liked Post", HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deletePostById(@PathVariable int id) {
        System.out.println("deleted " + id);
        postService.deletePostById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}