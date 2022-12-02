package com.revature.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Users")
public class User {
    
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "profile_name")
    private String profileName;

    @Column(unique = true)
    private String email;

    private String password;

    @OneToMany(targetEntity = Post.class, cascade = { CascadeType.ALL}, orphanRemoval = true)
    @JoinTable(name = "User_Posts", joinColumns = { @JoinColumn(name = "user_id")}, inverseJoinColumns = { @JoinColumn(name = "post_id") })
    private List<Post> posts;

    public User(String profileName, int id, List<Post> posts) {
        this.profileName = profileName;
        this.id = id;
        this.posts = posts;
    }
}
