package com.revature.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Comment;
import com.revature.models.Post;
import com.revature.models.User;
import com.revature.repositories.CommentRepository;
import com.revature.repositories.PostRepository;
import com.revature.repositories.UserRepository;

@Service
@Transactional
public class PostService {

  @Autowired
  private PostRepository postRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private CommentRepository commentRepository;

  public Post createPost(Post post) {
    Optional<User> user = userRepository.findById(post.getUserId());
    if (user.isPresent()) {
      post.setProfileName(user.get().getProfileName());
      post.setCreationTime(LocalDateTime.now());
      List<Post> posts = user.get().getPosts();
      posts.add(post);
      user.get().setPosts(posts);
    }
    return postRepository.save(post);
  }

  public List<Post> findAllPosts() {
    return postRepository.findAllPosts();
  }

  public List<Post> findAllUserPosts(int id) {
    return postRepository.findAllUserPosts(id);
  }

  public Post findPostById(int id) {
    Optional<Post> post = postRepository.findById(id);
    if (post.isPresent()) {
      return post.get();
    }
    return null;
  }

  public void deletePostById(int id) {
    postRepository.deletePostByIdFromUT(id);
    postRepository.deletePostByIdFromJT(id);
    postRepository.deletePostById(id);
  }

  public Post update(Post post) {
    return postRepository.save(post);
  }

  public Comment createComment(Comment comment) {
    return commentRepository.save(comment);
  }
}
