import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import productsData from '../service/data';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Function to get random meals
  const getRandomMeals = (num) => {
    const shuffled = [...productsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const featuredDishes = getRandomMeals(3);

  return (
    <div>
      {/* Hero Banner */}
      <div className="hero min-h-[70vh] bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200')] bg-cover bg-center">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to To'mah</h1>
            <p className="mb-5">Experience the finest dining with our carefully crafted dishes and exceptional service.</p>
            <Link to="/menu" className="btn ">View Menu</Link>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative max-w-xl mx-auto">
          <div className="flex items-center border rounded-lg p-2 bg-base-200">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search our menu..."
              className="ml-2 w-full bg-transparent border-none focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Featured Dishes */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={dish.image} alt={dish.name_en} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{dish.name_en}</h3>
                <p>{dish.desc_en}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-lg font-semibold">${dish.price}</span>
                  <button
                    onClick={() => navigate(`/menu/${dish.id}`, { state: { meal: dish } })}
                    className="btn btn-sm"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-6">Discover the perfect blend of tradition and innovation at To'mah. Our passionate chefs create memorable dining experiences with the finest ingredients and authentic recipes.</p>
              <Link to="/about" className="btn ">Learn More</Link>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Restaurant interior"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;