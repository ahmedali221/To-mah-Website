import React, { useState, useEffect } from 'react';
import productsData from '../service/data';


const initialFilters = {
  category: '',
  brand: '',
  available: '',
  minPrice: 0,
  maxPrice: Math.max(...productsData.map(p => p.price)),
  minRating: 0,
  search: '',
  sortBy: '',
};

export default function Sidebar({ filters, setFilters }) {
  const minProductPrice = Math.min(...productsData.map(p => p.price));
  const maxProductPrice = Math.max(...productsData.map(p => p.price));
  const [priceRange, setPriceRange] = useState({ min: minProductPrice, max: maxProductPrice });
  const [showResetButton, setShowResetButton] = useState(false);

  const availableCategories = ['All', ...new Set(productsData.map(product => product.category_en))];

  const popularProducts = productsData
    .filter(product => product.trendy === true)
    .map(product => ({
      name: product.name_en,
      price: product.price,
      image: product.image,
    }));

  useEffect(() => {
    setPriceRange({
      min: filters.minPrice,
      max: filters.maxPrice,
    });
    if (
      filters.minPrice === minProductPrice &&
      filters.maxPrice === maxProductPrice &&
      filters.category === ''
    ) {
      setShowResetButton(false);
    }
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleCategoryClick = (category_en) => {
    updateFilter('category', category_en === 'All' ? '' : category_en);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePriceInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    const type = event.target.name;
    setPriceRange(prevRange => ({ ...prevRange, [type]: value }));

  };

  const handleApplyPriceFilter = () => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    }));
    // show the reset button when action done to the price slider
    if (priceRange.min > 0 || priceRange.max < Infinity) {
      setShowResetButton(true);
    } else {
      setShowResetButton(false);
    }
    console.log('Price filter applied:', priceRange.min, '-', priceRange.max);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setPriceRange({ min: 0, max: Infinity });
    setShowResetButton(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // give the limitation's price
  const minPrice = Math.min(...productsData.map(p => p.price));
  const maxPrice = Math.max(...productsData.map(p => p.price));

  return (
    <aside className="w-full p-5 bg-white shadow ">
      {/*Categories section*/}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">CATEGORIES</h3>
        <ul className="space-y-2">
          {availableCategories.map((category_en, index) => (
            <li key={index}>
              <button
                onClick={() => handleCategoryClick(category_en)}
                className={`block text-sm cursor-pointer 
                    ${filters.category === (category_en === 'All' ? '' : category_en) ?
                    'text-black-500 font-bold text-2xl shadow-lg' : 'text-gray-700'}`}
              >
                {category_en}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Items */}
      <div className="mb-8">
        <h3 className="font-bold text-xl mb-4 text-gray-800 border-b pb-2">POPULAR ITEMS</h3>
        <ul className="space-y-4">
          {popularProducts.map((product, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">{product.name}</p>
                <p className="text-xs text-primary font-medium">${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* price filter*/}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">FILTER BY PRICE</h3>
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
          <input
            type="range"
            className="w-full"
            min={minPrice}
            max={maxPrice}
            value={priceRange.max === Infinity ? maxPrice : priceRange.max}
            name="max"
            onChange={handlePriceInputChange}
          />
          <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
            <span>Min: ${minPrice}</span>
            <span>Max: ${priceRange.max === Infinity ? maxPrice : priceRange.max}</span>
          </div>
        </div>
        {/* apply & reset buttons*/}
        <div className="flex space-x-2">
          <button
            onClick={handleApplyPriceFilter}
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 text-sm"
          >
            APPLY
          </button>
          {showResetButton && (
            <button
              onClick={handleResetFilters}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 text-sm"
            >
              RESET
            </button>
          )}
        </div>
      </div>

    </aside>
  );
}
