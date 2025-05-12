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

    //get the categories name from the products

    const availableCategories = ['All', ...new Set(productsData.map(product => product.category_en))];


    //popular product category by using prop trendy

    const popularProducts = productsData
        .filter(product => product.trendy === true)
        .map(product => ({
            name: product.name_en,
            price: product.price,
            image: product.image
            // image: (product.image) + (product.name_en ? product.name_en.split(' ').join('+') : 'No+Name'), // رابط مؤقت مع فحص للاسم
        }));  // .slice(0, 3); // we can make it slice to show the first 3 product of the trendy


    useEffect(() => {
        setPriceRange({ min: filters.minPrice, max: filters.maxPrice });
        // hide the reset button when no actions
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

            {/* Popular section*/}
            <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">POPULAR</h3>
                <ul className="space-y-4">
                    {popularProducts.map((product, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <img src={product.image} alt={product.name_en} className="w-16 h-12 object-cover rounded" />
                            <div>
                                <p className="text-sm font-semibold">{product.name}</p>
                                <p className="text-xs text-gray-600">${product.price}</p>
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