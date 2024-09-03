import React, { useState } from "react";
import ProductCard from './ProductCard';
import a from '../../assets/images/a.jpg';
import './Home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('fruits');

  const productsByCategory = {
    fruits: [
      {
        "price": "\u20b9998",
        "image": "https://m.media-amazon.com/images/I/71f5UPOWDqL._AC_UL320_.jpg",
        "name": "Nutraj 100% Nat",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9353",
        "image": "https://m.media-amazon.com/images/I/614FIW5c6HL._AC_UL320_.jpg",
        "name": "Cadbury Bournvi",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9170",
        "image": "https://m.media-amazon.com/images/I/61rBhkTJ6EL._AC_UL320_.jpg",
        "name": "Sugar Free Gree",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9139",
        "image": "https://m.media-amazon.com/images/I/71UO6eXC1QL._AC_UL320_.jpg",
        "name": "Daawat Pulav, L",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9295",
        "image": "https://m.media-amazon.com/images/I/51kEujuYlpL._AC_UL320_.jpg",
        "name": "Tata Tea Gold |",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9290",
        "image": "https://m.media-amazon.com/images/I/61kTHO+UX9L._AC_UL320_.jpg",
        "name": "Wagh Bakri Prem",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9295",
        "image": "https://m.media-amazon.com/images/I/61DMPchFPLL._AC_UL320_.jpg",
        "name": "Dabur Vedic Tea",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9640",
        "image": "https://m.media-amazon.com/images/I/71ehfHfPCzL._AC_UL320_.jpg",
        "name": "Nescafe Classic",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9399",
        "image": "https://m.media-amazon.com/images/I/71qVgLGta9L._AC_UL320_.jpg",
        "name": "BLUE TEA - Cham",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b955",
        "image": "https://m.media-amazon.com/images/I/71a5llM7MBL._AC_UL320_.jpg",
        "name": "Organic Tattva,",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9140",
        "image": "https://m.media-amazon.com/images/I/816voyD8jiL._AC_UL320_.jpg",
        "name": "Mccain Chilli G",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9570",
        "image": "https://m.media-amazon.com/images/I/61pVnleyBgL._AC_UL320_.jpg",
        "name": "Saffola Honey G",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9650",
        "image": "https://m.media-amazon.com/images/I/615F-HVtwEL._AC_UL320_.jpg",
        "name": "Red Label Natur",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b970",
        "image": "https://m.media-amazon.com/images/I/71stDXSgbHL._AC_UL320_.jpg",
        "name": "Kellogg's Choco",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9235",
        "image": "https://m.media-amazon.com/images/I/71Dtf-ydPYL._AC_UL320_.jpg",
        "name": "Dabur Amla Juic",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b973",
        "image": "https://m.media-amazon.com/images/I/71qMRn40n9L._AC_UL320_.jpg",
        "name": "Catch Red Chill",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b91,070",
        "image": "https://m.media-amazon.com/images/I/61oEmtyEMmL._AC_UL320_.jpg",
        "name": "Pedigree Dentas",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": null,
        "image": "https://m.media-amazon.com/images/I/71O-5pKLmzL._AC_UL320_.jpg",
        "name": "Fresh Baby Oran",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b925",
        "image": "https://m.media-amazon.com/images/I/81kgnSr+3KL._AC_UL320_.jpg",
        "name": "Britannia Milk ",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9600",
        "image": "https://m.media-amazon.com/images/I/71zjeDcWWXL._AC_UL320_.jpg",
        "name": "Nescaf\u00e9 Classic",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9845",
        "image": "https://m.media-amazon.com/images/I/91idhnLyJqL._AC_UL320_.jpg",
        "name": "Mother Dairy Pu",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b930",
        "image": "https://m.media-amazon.com/images/I/615qkjsgv8L._AC_UL320_.jpg",
        "name": "Cadbury Dairy M",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b9325",
        "image": "https://m.media-amazon.com/images/I/71fNICQ+fJL._AC_UL320_.jpg",
        "name": "TE-A-ME Purify ",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b995",
        "image": "https://m.media-amazon.com/images/I/71Wh7SUgUIL._AC_UL320_.jpg",
        "name": "Hershey's Choco",
        "addToCart": "() => console.log('Added Apple to cart')"
      },
      {
        "price": "\u20b980",
        "image": "https://m.media-amazon.com/images/I/7127Vty6kZL._AC_UL320_.jpg",
        "name": "Parle Monaco Cl",
        "addToCart": "() => console.log('Added Apple to cart')"
      },]
    ,
    vegetables:[{
      "price": "\u20b9145",
      "image": "https://m.media-amazon.com/images/I/619o61uLbgL._AC_UL320_.jpg",
      "name": "Tata Tea Premiu",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9740",
      "image": "https://m.media-amazon.com/images/I/71axZ7z9LhL._AC_UL320_.jpg",
      "name": "Nestl\u00e9 NAN PRO ",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b980",
      "image": "https://m.media-amazon.com/images/I/71cdjcxCeAL._AC_UL320_.jpg",
      "name": "Dabur Hommade L",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b922",
      "image": "https://m.media-amazon.com/images/I/61SCxbFGpWL._AC_UL320_.jpg",
      "name": "Fresh Organic G",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9150",
      "image": "https://m.media-amazon.com/images/I/71INJynix0L._AC_UL320_.jpg",
      "name": "More Bengal Gra",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9955",
      "image": "https://m.media-amazon.com/images/I/61fL35+n7TL._AC_UL320_.jpg",
      "name": "Saffola Active ",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9848",
      "image": "https://m.media-amazon.com/images/I/511W3uA6yzL._AC_UL320_.jpg",
      "name": "Herbalife Nutri",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b985",
      "image": "https://m.media-amazon.com/images/I/61tiR5teCjL._AC_UL320_.jpg",
      "name": "Thums Up Soft D",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b980",
      "image": "https://m.media-amazon.com/images/I/619Dntj9dJL._AC_UL320_.jpg",
      "name": "Tata Sampann Ch",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b930",
      "image": "https://m.media-amazon.com/images/I/51+iVkS0ZVL._AC_UL320_.jpg",
      "name": "Brooke Bond, Re",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9280",
      "image": "https://m.media-amazon.com/images/I/61jbZ93NhML._AC_UL320_.jpg",
      "name": "Goodricke Roast",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9173",
      "image": "https://m.media-amazon.com/images/I/71Qgc4wDwVL._AC_UL320_.jpg",
      "name": "Glucon-D Instan",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b940",
      "image": "https://m.media-amazon.com/images/I/71lmk-WE2OL._AC_UL320_.jpg",
      "name": "Sunfeast Dark F",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9140",
      "image": "https://m.media-amazon.com/images/I/71KZQkANkFS._AC_UL320_.jpg",
      "name": "Amul Chocomini ",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b940",
      "image": "https://m.media-amazon.com/images/I/71PFNfK7zhL._AC_UL320_.jpg",
      "name": "Sunfeast Dark F",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b989",
      "image": "https://m.media-amazon.com/images/I/41dqMrWXmLL._AC_UL320_.jpg",
      "name": "UPF Healthy Bro",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b950",
      "image": "https://m.media-amazon.com/images/I/91aWJn2W5eL._AC_UL320_.jpg",
      "name": "Cup Noodles Maz",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9395",
      "image": "https://m.media-amazon.com/images/I/81kcZpNNKNS._AC_UL320_.jpg",
      "name": "Aashirvaad Suga",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9400",
      "image": "https://m.media-amazon.com/images/I/71SpDzVLJZL._AC_UL320_.jpg",
      "name": "Urban Platter P",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9210",
      "image": "https://m.media-amazon.com/images/I/819vYkT-VHL._AC_UL320_.jpg",
      "name": "Aashirvaad Natu",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b989",
      "image": "https://m.media-amazon.com/images/I/71eY2jA-pHL._AC_UL320_.jpg",
      "name": "veeba pasta piz",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9219",
      "image": "https://m.media-amazon.com/images/I/618I4yT4eiL._AC_UL320_.jpg",
      "name": "Himalayan Nativ",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b955",
      "image": "https://m.media-amazon.com/images/I/71LtAovHIsL._AC_UL320_.jpg",
      "name": "24 Mantra Organ",
      "addToCart": "() => console.log('Added Apple to cart')"
    },]
    ,
    dairy: [{
      "price": "\u20b9580",
      "image": "https://m.media-amazon.com/images/I/61ctpFYqLTL._AC_UL320_.jpg",
      "name": "Brij Gwala Desi",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9750",
      "image": "https://m.media-amazon.com/images/I/713lj6wLuJL._AC_UL320_.jpg",
      "name": "Mangalam Campho",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b950",
      "image": "https://m.media-amazon.com/images/I/91sFWJgCLDL._AC_UL320_.jpg",
      "name": "Cup Noodles Veg",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b975",
      "image": "https://m.media-amazon.com/images/I/81VK59CJUXL._AC_UL320_.jpg",
      "name": "Parle Krackjack",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9595",
      "image": "https://m.media-amazon.com/images/I/51mow6vx+HL._AC_UL320_.jpg",
      "name": "True Elements N",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b975",
      "image": "https://m.media-amazon.com/images/I/61xUrZc2XtL._AC_UL320_.jpg",
      "name": "Cadbury Dairy M",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9165",
      "image": "https://m.media-amazon.com/images/I/41BRTVTgr2L._AC_UL320_.jpg",
      "name": "LG Asafoetida P",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9500",
      "image": "https://m.media-amazon.com/images/I/61pt8-knI5L._AC_UL320_.jpg",
      "name": "Sleepy Owl Prem",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9650",
      "image": "https://m.media-amazon.com/images/I/71R-oJjH5UL._AC_UL320_.jpg",
      "name": "Cadbury Silk Va",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b91,499",
      "image": "https://m.media-amazon.com/images/I/41fnPBnX5UL._AC_UL320_.jpg",
      "name": "Nature Prime 10",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9199",
      "image": "https://m.media-amazon.com/images/I/81zDBFZ8OuL._AC_UL320_.jpg",
      "name": "Tur Dal Loose S",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9135",
      "image": "https://m.media-amazon.com/images/I/81q6FAqIfvL._AC_UL320_.jpg",
      "name": "Mccain Veggie B",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9299",
      "image": "https://m.media-amazon.com/images/I/712M02gShZL._AC_UL320_.jpg",
      "name": "Saffola Fittify",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9100",
      "image": "https://m.media-amazon.com/images/I/71tdCqV6q3L._AC_UL320_.jpg",
      "name": "Patanjali Saund",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9130",
      "image": "https://m.media-amazon.com/images/I/51hdl9zEmGL._AC_UL320_.jpg",
      "name": "Brooke Bond Red",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9168",
      "image": "https://m.media-amazon.com/images/I/51RqD74voHL._AC_UL320_.jpg",
      "name": "Organic India T",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b980",
      "image": "https://m.media-amazon.com/images/I/81kcZpNNKNS._AC_UL320_.jpg",
      "name": "Aashirvaad Suga",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9180",
      "image": "https://m.media-amazon.com/images/I/61cF+L8aeEL._AC_UL320_.jpg",
      "name": "Himalaya Wellne",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9190",
      "image": "https://m.media-amazon.com/images/I/61URw94UvuL._AC_UL320_.jpg",
      "name": "Saffola Tasty R",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9199",
      "image": "https://m.media-amazon.com/images/I/716VAVQvxjL._AC_UL320_.jpg",
      "name": "More Whole Maso",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9250",
      "image": "https://m.media-amazon.com/images/I/71scYxnHEgL._AC_UL320_.jpg",
      "name": "Urban Platter B",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9180",
      "image": "https://m.media-amazon.com/images/I/614Vy2M-YUL._AC_UL320_.jpg",
      "name": "Lipton Honey Le",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9600",
      "image": "https://m.media-amazon.com/images/I/91eXmQplbIL._AC_UL320_.jpg",
      "name": "Amazon Brand - ",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9198",
      "image": "https://m.media-amazon.com/images/I/81+zN8b8ATL._AC_UL320_.jpg",
      "name": "Manna Foxtail M",
      "addToCart": "() => console.log('Added Apple to cart')"
    },
    {
      "price": "\u20b9725",
      "image": "https://m.media-amazon.com/images/I/71TAyjyYmyL._AC_UL320_.jpg",
      "name": "ORGANIC INDIA C",
      "addToCart": "() => console.log('Added Apple to cart')"
    },]
    ,
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="select-btn">
        {Object.keys(productsByCategory).map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Divider between the button section and product list */}
      <div className="divider"></div>

      <div className="product-list">
        {productsByCategory[selectedCategory].map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            addToCart={product.addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
