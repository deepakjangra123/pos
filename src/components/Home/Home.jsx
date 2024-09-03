import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductCard from './ProductCard';
import './Home.css';

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState('fruits');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/RetailStorePOSAppAPI/v1/categories");
      setCategories(response.data);
      if (response.data.length > 0) {
        setSelectedCategory(response.data[0].name); // Set default category
      }
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/RetailStorePOSAppAPI/v1/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  
  const productsByCategory = products.filter(product => product.category_name === selectedCategory);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  console.log(products)
  console.log()

  return (
    <div>
      <div className="select-btn">
        {categories.map(category => (
          <button key={category.id} onClick={() => handleCategoryClick(category.name)}>
            {category.name}
          </button>
        ))}
      </div>

      <div className="divider"></div>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={`./${product.image_path.replace(/\\/g,'/')}`}

            price={product.price}
            addToCart={() => console.log(`Added ${product.name} to cart`)}
          />
          
        ))}
      </div>
    </div>
  );
};

export default Home;