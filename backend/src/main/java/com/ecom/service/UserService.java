package com.ecom.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecom.dao.UserRepository;
import com.ecom.entity.User;

@Service
public class UserService {
 @Autowired
	private UserRepository repo;
 
 public boolean save(User user) {
	 User existingUser=repo.findByMailId(user.getMailId());
	 if(existingUser == null) {
		 repo.save(user);
		 return true;
	 }else {
		 return false;  
		
	 } 
 }
	
 public User findUserByMailId(String email) {
	 return repo.findByMailId(email);
 }
 public User findByUsername(String username) {
	 return repo.findByUsername(username);
 }
 
 public User validateUser(String email,String password) {
	 User user=repo.findByMailId(email);
	 if(user != null && user.getUserPassword().equals(password)) {
		 return user;
	 }
	 return null;
 }
}
