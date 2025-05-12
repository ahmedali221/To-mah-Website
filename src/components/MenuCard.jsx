import React, { useEffect, useState } from 'react';
import productsData from '../service/data';

export default function MenuCard({ filters, currentPage, setCurrentPage, setFilters, searchQuery }) {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let filtered = productsData.filter(product => {
            return (
                (filters.category === '' || product.category_en === filters.category) &&
                (filters.brand === '' || product.brand === filters.brand) &&
                (filters.available === '' || String(product.available) === filters.available) &&
                product.price >= filters.minPrice &&
                product.price <= filters.maxPrice &&
                product.rating >= filters.minRating &&
                (
                    product.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (product.name_ar && product.name_ar.toLowerCase().includes(searchQuery.toLowerCase()))
                )
            );
        });



        if (filters.sortBy) {
            filtered.sort((a, b) => {
                if (filters.sortBy === 'price-asc') return a.price - b.price;
                if (filters.sortBy === 'price-desc') return b.price - a.price;
                if (filters.sortBy === 'rating-asc') return a.rating - b.rating;
                if (filters.sortBy === 'rating-desc') return b.rating - a.rating;
                return 0;
            });
        }

        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [filters, setCurrentPage, searchQuery]);

    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handleSortChange = (event) => {
        setFilters({ ...filters, sortBy: event.target.value });
    };

    return (
        <main className="w-full  mx-auto
               sm:w-11/12 sm:p-6
               md:w-5/6 md:p-8
               lg:w-4/5 lg:p-10
               xl:w-3/4 xl:p-12
               2xl:w-2/3 2xl:p-14">
            <div className="flex justify-between items-center mb-4">

                <p className="text-lg text-gray-600">Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} results</p>
                <div className="relative">
                    <select
                        value={filters.sortBy}
                        onChange={handleSortChange}
                        className="appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Default sorting</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating-asc">Rating: Low to High</option>
                        <option value="rating-desc">Rating: High to Low</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            {paginatedProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 "> {/*edit grid-cols */}
                    {paginatedProducts.map(product => (
                        <li key={product.id}>
                            <div className="card bg-base-100 group overflow-hidden  ">
                                <figure className="relative transition-transform duration-300 group-hover:scale-105">
                                    <img
                                        src={product.image}
                                        alt={product.name_en}
                                        className="w-90 h-90 object-cover"
                                    />
                                    <button className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                        bg-black text-white px-6 py-3 text-base w-40
                                        flex items-center justify-center gap-2
                                        opacity-0 group-hover:opacity-100
                                        transition-all duration-300 z-10
                                        hover:bg-gray-800 hover:text-lg"
                                    >
                                        ADD TO CART
                                    </button>
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title uppercase text-lg font-semibold">
                                        {product.name_en}
                                    </h2>
                                    <h3 className="card-title  text-lg font-semibold">
                                        {product.desc_en}
                                    </h3>
                                    <p className="text-lg font-semibold text-black flex items-center gap-1">
                                        <span className="text-lg font-semibold text-gray-500">SR.</span> {product.price}
                                    </p>
                                    {/* you can add more details here*/}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-6 flex justify-center items-center space-x-4">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                <span>Page {currentPage} of {totalPages}</span>

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </main>
    );
};