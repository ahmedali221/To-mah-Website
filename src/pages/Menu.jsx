import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MenuCard from '../components/MenuCard';
import HeroSection from '../components/HeroSection'; // تأكد إنك مستورد HeroSection

function Menu() {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    available: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    search: '', // حالة جديدة لتخزين قيمة البحث (هنستخدمها مؤقتًا أو ممكن نربطها بـ filters على طول)
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