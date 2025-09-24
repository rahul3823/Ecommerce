import React, { useContext, useState } from 'react';
import "../CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [showExtra, setShowExtra] = useState(false); // toggles showing extra products

  const handleExploreClick = () => {
    setShowExtra(prev => !prev); // toggle state
  };

  // Filter all products by current category
  const categoryItems = all_product.filter(item => item.category === props.category);

  // Show first 8 by default; first 12 if showExtra is true
  const visibleItems = showExtra ? categoryItems.slice(0, 12) : categoryItems.slice(0, 8);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />

      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing {visibleItems.length}</span> out of {categoryItems.length} products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="Sort Icon" height="20px" />
        </div>
      </div>

      <div className="shopcategory-products">
        {visibleItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* Show "Explore More" button only if more than 8 items exist */}
      {categoryItems.length > 8 && (
        <div className="shopcategory-loadmore" onClick={handleExploreClick}>
          {showExtra ? "Show Less" : "Explore More"}
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
