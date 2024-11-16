package com.ecom;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class EcommerceBackendApplication {
	public static void main(String[] args) {
		System.out.println("Execution started");
		SpringApplication.run(EcommerceBackendApplication.class, args);
		System.out.println("Execution ended");
	}
}