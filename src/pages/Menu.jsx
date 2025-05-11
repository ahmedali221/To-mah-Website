import { useState } from 'react';
import { useCart } from '../context/CartContext';

function Menu() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const menuCategories = [
    {
      id: 'starters',
      name: 'Starters',
      items: [
        {
          id: 1,
          name: 'Pure Unsweetened Acai Bowl',
          description: 'Pure Unsweetened Acai Puree, Toppings, Yogurt',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=500'
        },
        {
          id: 2,
          name: 'Truffle Mushroom Salad',
          description: 'Ceps, Parmesan, Alba Truffle, Mixed Greens',
          price: 16.99,
          image: 'https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?w=500'
        }
      ]
    },
    {
      id: 'mains',
      name: 'Main Courses',
      items: [
        {
          id: 3,
          name: 'Signature Burger',
          description: 'Angus beef patty, Cheddar cheese, Lettuce, Tomato',
          price: 18.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
        },
        {
          id: 4,
          name: 'Grilled Salmon',
          description: 'Fresh salmon, Lemon butter sauce, Seasonal vegetables',
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=500'
        }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        {
          id: 5,
          name: 'Citrus Splash',
          description: 'A blend of orange, lemon, lime juices, sparkling water',
          price: 5.99,
          image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500'
        },
        {
          id: 6,
          name: 'Berry Breeze',
          description: 'Fresh lemonade with a swirl of mixed berry puree',
          price: 6.99,
          image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500'
        }
      ]
    }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    // Show toast or notification
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }
  };

  const filteredCategories = menuCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search menu items..."
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item) => (
                <div key={item.id} className="card lg:card-side bg-base-100 shadow-xl">
                  <figure className="lg:w-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="card-actions justify-between items-center">
                      <span className="text-lg font-semibold">${item.price}</span>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}


        {/* test */}
        <div className="card bg-base-100 w-65  group overflow-hidden">
          <figure className="relative transition-transform duration-300 group-hover:scale-105">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="w-full  h-100"
            />


            <button className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      bg-black text-white px-6 py-3  text-base w-40
      flex items-center gap-2 
      opacity-0 group-hover:opacity-100 
      transition-all duration-300 z-10
      hover:bg-gray-800 hover:text-lg" >
              {/* <span className="hidden  group-hover:inline  transition-opacity duration-300 text-yellow">*
              </span> */}
              ADD TO CART
            </button>
          </figure>

          <div className="card-body">
            <h2 className="card-title uppercase">
              card title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>


            <p className="text-lg font-semibold text-black flex items-center gap-1">
              <span className="text-lg font-semibold text-gray-500">SR.</span> 199
            </p>
            {/* <p>
            A card component has a figure, a body part, and inside body there are title and actions parts
          </p> */}
            {/* <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div> */}
          </div>
        </div>


        
      </div>






      {/* Toast Notification */}
      <div
        id="toast"
        className="toast toast-end hidden"
      >
        <div className="alert alert-success">
          <span>Item added to cart!</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;