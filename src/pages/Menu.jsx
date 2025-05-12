import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import HeroSection from '../components/HeroSection';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../service/data';
import Sidebar from '../components/Sidebar';

function Menu() {

  const minPrice = Math.min(...productsData.map(p => p.price));
  const maxPrice = Math.max(...productsData.map(p => p.price));

  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    available: '',
    minPrice: minPrice,
    maxPrice: maxPrice,
    minRating: 0,
    search: '',
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

  // onViewDetails = { handleViewDetails }
  // onAddToCart = { handleAddToCart }
  // products = { filteredProducts }


  return (
    <div className="min-h-screen">
      <HeroSection setSearchQuery={handleSearchQueryChange} /> {/* تمرير الدالة لـ HeroSection */}
      <div className="flex flex-col md:flex-row">
        {/* product card */}
        <div className="flex-grow p-4 order-first md:order-none">
          <MenuCard
            filters={filters}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setFilters={setFilters}
            searchQuery={searchQuery} // تمرير قيمة البحث لـ MenuCard
            onViewDetails={handleViewDetails}
            onAddToCart={handleAddToCart}
            products={filteredProducts}
          />
        </div>

        {/* sidebar */}
        <div className="w-full md:w-1/3 lg:w-[50%] xl:w-[50%] p-4 bg-white shadow-md">
          <Sidebar filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
