package com.ecom.service;

import java.io.InputStream;
import java.util.List;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.dao.ProductRepository;
import com.ecom.entity.Product;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.annotation.PostConstruct;

@Service
public class ProductService {
    
	private final ProductRepository productRepo;
	
   
	public ProductService(ProductRepository productRepo) {
		this.productRepo=productRepo;
	}
	
    public List<Product> getAllProducts() {
    	return productRepo.findAll();
    }
    
    public Product saveProduct(Product product) {
    	return productRepo.save(product);
    }
    @PostConstruct
    public void loadProducts() throws Exception{
    	ObjectMapper mapper=new ObjectMapper();
    	InputStream iStream=getClass().getResourceAsStream("/ProductData.json");
    	List<Product> products=mapper.readValue(iStream, new TypeReference<List<Product>>() {});
    	productRepo.saveAll(products);
    }
}
