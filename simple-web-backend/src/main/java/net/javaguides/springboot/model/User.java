package net.javaguides.springboot.model;

// from javax you have to change jakarta 
// Thank you StackOverflow <3
import jakarta.persistence.*;


// THIS CLASS IS CALLED DTO ( Data Transfer Object ) THEY ARE THE M INTO MVC

@Entity 
@Table(name = "users")
public class User {

	@Id // this is the Primary Key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long  id;
	
	@Column(name = "first_name")
	private String firstName;
	

	@Column(name = "last_name")
	private String lastName;
	

	@Column(name = "email_id")
	private String emailId;
	

	@Column(name = "gender")
	private String gender;
	

	@Column(name = "birthdate")
	private String bDay;
	

	@Column(name = "work_address")
	private String workAddr;
	

	@Column(name = "home_address")
	private String homeAddr;
	
	// CONSTRUCTORS
	
	//DEFAULT_ CONSTRUCTOR
	// Remeber that hibernate internaly uses proxies to create the objects
	public User() {
		
	}
	
	// CONSTRUCTOR /W ALL THE VAR(S)
	public User(String firstName,String lastName, String gender ,String bDay, String workAddr , String homeAddr) {
		
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.bDay = bDay;
		this.workAddr = workAddr;
		this.homeAddr = homeAddr;
	}
	
	// GETTERS AND SETTER 
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getBDate() {
		
		return bDay;
	}
	
	public void setBDate(String bDay) {
		this.bDay = bDay;
	}
	
	public String getWorkAddress() {
		return workAddr;
	}
	
	public void setWorkAddress(String workAddr) {
		
		this.workAddr = workAddr;
	
	}
	
	public String getHomeAddress() {
		return homeAddr;
	}
	
	public void setHomeAddress(String homeAddr) {
		
		this.homeAddr = homeAddr;
	
	}
	
}
