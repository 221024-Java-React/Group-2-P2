package com.revature.controllers;

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

    // @GetMapping("/all/{id}")
    // public ResponseEntity<List<Post>> findAllUserPosts(@PathVariable("id") int id) {
    //     return new ResponseEntity<>(this.postService.findAllUserPosts(id), HttpStatus.OK);
    // }

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

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deletePostById(@PathVariable("id") int id) {
        postService.deletePostById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}