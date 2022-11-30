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
@Table(name = "Customers")
public class Customer {
    
    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "profile_name")
    private String profileName;

    @Column(unique = true)
    private String email;

    private String password;

    @OneToMany(targetEntity = Post.class, cascade = { CascadeType.ALL})
    @JoinTable(name = "Customer_Posts", joinColumns = { @JoinColumn(name = "customer_id")}, inverseJoinColumns = { @JoinColumn(name = "post_id") })
    private List<Post> posts;

}
