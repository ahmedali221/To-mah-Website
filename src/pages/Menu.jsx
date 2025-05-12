import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MenuCard from '../components/MenuCard';
import HeroSection from '../components/HeroSection';
import productsData from '../service/data';

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
    search: '', // 
    sortBy: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // حالة لتخزين قيمة البحث من HeroSection

  // دالة لتحديث حالة البحث
  const handleSearchQueryChange = (query) => {
    setSearchQuery(query); // تحديث حالة البحث
    setCurrentPage(1); // إعادة تعيين الصفحة عند البحث
  };

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