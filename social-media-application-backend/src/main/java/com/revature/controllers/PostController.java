package com.revature.controllers;

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

import com.revature.models.Post;
import com.revature.services.PostService;


@RestController
@RequestMapping("/posts")
public class PostController {
    
    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public Object hello(HttpSession session) {
        return session.getAttribute("CurrentUser");
    }
    
    @PostMapping("/create")
    public HttpStatus createPost(@RequestBody Post post){
        ResponseEntity<String> response;
        Post newPost = this.postService.createPost(post);
        if(newPost != null){
            response = new ResponseEntity<>("Post created successfully", HttpStatus.CREATED);
        } else {
            response = new ResponseEntity<>("Error creating Post", HttpStatus.CONFLICT);
        }
        return response.getStatusCode();
    }
}