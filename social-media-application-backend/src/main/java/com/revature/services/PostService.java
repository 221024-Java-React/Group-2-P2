package com.revature.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Post;
import com.revature.models.User;
import com.revature.repositories.PostRepository;
import com.revature.repositories.UserRepository;


@Service
@Transactional
public class PostService {
    
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public Post createPost(Post post){
        User user = userRepository.findById(post.getUserId()).get();
        post.setProfileName(user.getProfileName());
        post.setCreationTime(LocalDateTime.now());
        List<Post> posts = user.getPosts();
        posts.add(post);
        user.setPosts(posts);
        return postRepository.save(post);
    }

    public List<Post> findAllPosts() {
        return postRepository.findAllPosts();
    }

    public Post findPostById(int id) {
        return postRepository.findById(id).get();
    }

    public void deletePostById(int id) {
        postRepository.deletePostByIdFromJT(id);
        postRepository.deletePostById(id);
    } 
}
