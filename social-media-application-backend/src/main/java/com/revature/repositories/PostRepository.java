package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.models.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

  @Query(value = "SELECT * FROM posts p ORDER BY p.creation_time DESC", nativeQuery = true)
  List<Post> findAllPosts();

  @Query(value = "SELECT * FROM posts p WHERE p.user_id = ?1 ORDER BY p.creation_time DESC", nativeQuery = true)
  List<Post> findAllUserPosts(int id);

  @Modifying
  @Query(value = "DELETE FROM user_posts WHERE user_posts.post_id = ?1", nativeQuery = true)
  void deletePostByIdFromJT(int id);

  @Modifying
  @Query(value = "DELETE FROM posts WHERE posts.post_id = ?1", nativeQuery = true)
  void deletePostById(int id);

  @Modifying
  @Query(value = "DELETE FROM users_comments WHERE users_comments.post_id = ?1", nativeQuery = true)
  void deletePostByIdFromUT(int id);
}
