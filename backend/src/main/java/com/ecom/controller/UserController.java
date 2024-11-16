package com.ecom.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecom.entity.User;
import com.ecom.service.UserService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
	
 @Autowired
 private UserService service;
 
 @PostMapping("/signup")
 public ResponseEntity<String> signup(@RequestBody User user){
	 boolean isSaved=service.save(user);
	 if(isSaved) {
		 return ResponseEntity.ok("User signed up successfully");
	 }else {
		return ResponseEntity.badRequest().body("SignUp failed. User may already exist");
	 }
 }
 
 @PostMapping("/login")
 public ResponseEntity<String> login(@RequestBody User user){
	 User loggedInUser=service.validateUser(user.getMailId(),user.getUserPassword());
	 if(loggedInUser != null) {
		 return ResponseEntity.ok("Login successfully");
	 }else {
		 return ResponseEntity.status(401).body("Invalid credentials");
	 }
 } 
}
