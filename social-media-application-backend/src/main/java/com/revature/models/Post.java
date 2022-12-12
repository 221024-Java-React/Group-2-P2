package com.revature.models;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Posts")
public class Post {
    
    @Id
    @Column(name = "post_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "creation_time")
    private LocalDateTime creationTime;

    private String content;

    @Column(name = "user_id")
    private Integer userId;
    
    @Column(name = "profile_name")
    private String profileName;

    @ElementCollection
    @Column(name = "users_liked")
    private List<Integer> usersLiked;


    @OneToMany(targetEntity = Comment.class, cascade = { CascadeType.ALL}, orphanRemoval = true)
    @JoinTable(name = "users_comments", joinColumns = { @JoinColumn(name = "post_id")}, inverseJoinColumns = { @JoinColumn(name = "comment_id") })
    private List<Comment> usersComments;

}
