import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import HeroSection from '../components/HeroSection';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../service/data';
import HeroSection from '../components/HeroSection';
import productsData from '../service/data';

function Menu() {
  const minPrice = Math.min(...productsData.map(p => p.price));
  const maxPrice = Math.max(...productsData.map(p => p.price));

  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    available: '',
    minPrice: 0,
    maxPrice: Math.max(...productsData.map(p => p.price)),
    minPrice: minPrice,
    maxPrice: maxPrice,
    minRating: 0,
    search: '',
    search: '', // 
    sortBy: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleViewDetails = (product) => {
    navigate('/menu/' + product.id, { state: { meal: product } });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: add toast notification
  };

  // Filter products based on search and basic filters
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = filters.category === '' || product.category_en === filters.category;
    const matchesPrice =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesSearch =
      searchQuery === '' ||
      product.name_en.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <HeroSection setSearchQuery={handleSearchQueryChange} />
      <div className="px-4 py-8">
        <MenuCard
          filters={filters}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setFilters={setFilters}
          searchQuery={searchQuery}
          onViewDetails={handleViewDetails}
          onAddToCart={handleAddToCart}
          products={filteredProducts} // Pass only filtered products
        />
      </div>
    </div>
  );
}

export default Menu;
