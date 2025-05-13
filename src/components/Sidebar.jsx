import React, { useState, useEffect } from 'react';
import productsData from '../service/data';

const initialFilters = {
    category: '',
    brand: '',
    available: '',
    minPrice: 0,
    maxPrice: Infinity,
    minRating: 0,
    search: '',
    sortBy: '',
};

export default function Sidebar({ filters, setFilters }) {
    const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
    const [showResetButton, setShowResetButton] = useState(false);
    const [expandedSection, setExpandedSection] = useState('categories'); // Track which section is expanded

    // Get the categories name from the products
    const availableCategories = ['All', ...new Set(productsData.map(product => product.category_en))];

    // Popular product category by using prop trendy
    const popularProducts = productsData
        .filter(product => product.trendy === true)
        .map(product => ({
            id: product.id,
            name: product.name_en,
            price: product.price,
            image: product.image
        }));

    useEffect(() => {
        setPriceRange({ min: filters.minPrice, max: filters.maxPrice });
        // Hide the reset button when no actions
        if (filters.minPrice === 0 && filters.maxPrice === Infinity) {
            setShowResetButton(false);
        }
    }, [filters.minPrice, filters.maxPrice]);

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
        // Show the reset button when action done to the price slider
        if (priceRange.min > 0 || priceRange.max < Infinity) {
            setShowResetButton(true);
        } else {
            setShowResetButton(false);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleResetFilters = () => {
        setFilters(initialFilters);
        setPriceRange({ min: 0, max: Infinity });
        setShowResetButton(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    // Give the limitation's price
    const minPrice = Math.min(...productsData.map(p => p.price));
    const maxPrice = Math.max(...productsData.map(p => p.price));

    return (
        <aside className="w-full bg-white rounded-lg">
            {/* Reset All Filters button at the top */}
            {(filters.category !== '' || filters.minPrice > 0 || filters.maxPrice < Infinity) && (
                <div className="p-4 border-b border-gray-100">
                    <button
                        onClick={handleResetFilters}
                        className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Reset All Filters
                    </button>
                </div>
            )}

            {/* Categories section */}
            <div className="border-b border-gray-100">
                <button
                    className="flex justify-between items-center w-full p-4 text-left font-bold"
                    onClick={() => toggleSection('categories')}
                >
                    <span>CATEGORIES</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${expandedSection === 'categories' ? 'transform rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                
                {expandedSection === 'categories' && (
                    <div className="p-4 pt-0">
                        <ul className="space-y-3">
                            {availableCategories.map((category_en, index) => {
                                const isActive = filters.category === (category_en === 'All' ? '' : category_en);
                                return (
                                    <li key={index}>
                                        <button
                                            onClick={() => handleCategoryClick(category_en)}
                                            className={`w-full text-left py-1 px-2 rounded transition-colors ${
                                                isActive 
                                                    ? 'bg-black text-white font-medium' 
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {category_en}
                                            {isActive && (
                                                <span className="float-right">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>

            {/* Price Filter section */}
            <div className="border-b border-gray-100">
                <button
                    className="flex justify-between items-center w-full p-4 text-left font-bold"
                    onClick={() => toggleSection('price')}
                >
                    <span>FILTER BY PRICE</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${expandedSection === 'price' ? 'transform rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                
                {expandedSection === 'price' && (
                    <div className="p-4 pt-0">
                        <div className="mb-6">
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                                <span className="font-medium">Range:</span>
                                <span className="bg-gray-100 px-2 py-1 rounded">
                                    ${minPrice} - ${priceRange.max === Infinity ? maxPrice : priceRange.max}
                                </span>
                            </div>
                            
                            <input
                                type="range"
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                min={minPrice}
                                max={maxPrice}
                                value={priceRange.max === Infinity ? maxPrice : priceRange.max}
                                name="max"
                                onChange={handlePriceInputChange}
                            />
                            
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>${minPrice}</span>
                                <span>${maxPrice}</span>
                            </div>
                        </div>
                        
                        <button
                            onClick={handleApplyPriceFilter}
                            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
                        >
                            APPLY FILTER
                        </button>
                    </div>
                )}
            </div>

            {/* Popular Products section */}
            <div>
                <button
                    className="flex justify-between items-center w-full p-4 text-left font-bold"
                    onClick={() => toggleSection('popular')}
                >
                    <span>POPULAR ITEMS</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${expandedSection === 'popular' ? 'transform rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                
                {expandedSection === 'popular' && (
                    <div className="p-4 pt-0">
                        <ul className="space-y-4">
                            {popularProducts.length > 0 ? (
                                popularProducts.map((product, index) => (
                                    <li key={index} className="flex items-center space-x-3 group p-2 hover:bg-gray-50 rounded transition-colors">
                                        <div className="w-16 h-16 overflow-hidden rounded bg-gray-100">
                                            <img 
                                                src={product.image} 
                                                alt={product.name} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-800 line-clamp-1">{product.name}</p>
                                            <p className="text-black font-bold mt-1">SR. {product.price.toFixed(2)}</p>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-500 text-center py-4">No trending products available</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </aside>
    );
}