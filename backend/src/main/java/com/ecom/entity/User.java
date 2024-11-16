package com.ecom.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String username;
	private String mailId;
	private String userPassword;
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", mailId=" + mailId + ", userPassword=" + userPassword
				+ "]";
	}
	public User(int id, String username, String mailId, String userPassword) {
		super();
		this.id = id;
		this.username = username;
		this.mailId = mailId;
		this.userPassword = userPassword;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMailId() {
		return mailId;
	}
	public void setMailId(String mailId) {
		this.mailId = mailId;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	
	
	
}
