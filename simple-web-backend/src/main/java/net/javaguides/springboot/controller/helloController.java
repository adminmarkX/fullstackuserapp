package net.javaguides.springboot.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class helloController {

	@GetMapping("/hello")
	public String hello() {
		return ("<div> <p> Hello </p> </div>");
	}
	
}
