package com.ecom.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String img;
	private String category;
	private String subcategory;
	private String title;
	private String description;
	private double price;
	@JsonProperty("isFeatured")
	@Column(name = "is_featured")
	private boolean isFeatured;
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(int id, String img, String category, String subcategory, String title, String description,
			double price, boolean isFeatured) {
		super();
		this.id = id;
		this.img = img;
		this.category = category;
		this.subcategory = subcategory;
		this.title = title;
		this.description = description;
		this.price = price;
		this.isFeatured = isFeatured;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getSubcategory() {
		return subcategory;
	}
	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public boolean isFeatured() {
		return isFeatured;
	}
	public void setFeatured(boolean isFeatured) {
		this.isFeatured = isFeatured;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", img=" + img + ", category=" + category + ", subcategory=" + subcategory
				+ ", title=" + title + ", description=" + description + ", price=" + price + ", isFeatured="
				+ isFeatured + "]";
	}
	
}
