package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;
import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.execption.ResourceNotFoundException;
import net.javaguides.springboot.model.User;

// for the List to be generic 
import java.util.List;

// this will allow the Front-end application to connect to the back end and take t
// the users



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/")
public class UsersController {
		
	
	@Autowired
	private UserRepository userRepository;
	
	// this is the same as GET Method 
	@GetMapping("/users/")
	public List<User> getAllUsers(){
		
		 return userRepository.findAll();
	}
	
	// this is the same as POST Method 
	// the .save(user) saves the User object to the Db
	// with the help of the userRepositoty
	// we have CORS Error and we can not insert from the React App 
	// from the Postman its possible
		@PostMapping("/add/")
		public User createUser(@RequestBody User user){ 
			 return userRepository.save(user);
		}
		
		
		// get User by id 
		@GetMapping("/get-users/{id}")
		public ResponseEntity<User> getUserById(@PathVariable long id) {
			User getuser = userRepository.findById(id).orElseThrow(() -> new  
					ResourceNotFoundException("User with this id: "+id+" doesn't exist"));
			
		
			return 	ResponseEntity.ok(getuser);
		}
		
		// Update user
		@PutMapping("/update-user/{id}")
		public ResponseEntity<User> updateUser(@PathVariable long id,@RequestBody User updateuser){
			
			User updateuser = userRepository.findById(id).orElseThrow(() -> new 
					ResourceNotFoundException("User not exist with id: "+id));
			
			updateuser.setFirstName(updateuser.getFirstName());
			updateuser.setLastName(updateuser.getLastName());
			updateuser.setEmailId(updateuser.getEmailId());
			
			User updatedUser = userRepository.save(updateuser);
			return ResponseEntity.ok(updatedUser);
		
	
		}
		
		
		
		@Component
		public class CustomCorsConfiguration implements CorsConfigurationSource {
			
		    public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
		        CorsConfiguration config = new CorsConfiguration();
		        config.setAllowedOrigins(List.of("http://localhost:8090","http://localhost:3000", "http://127.0.0.1:8080"));
		        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
		        config.setAllowedHeaders(List.of("*"));
		        return config;
		    }
		}
}
