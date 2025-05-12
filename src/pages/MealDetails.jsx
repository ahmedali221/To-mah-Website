import { useCart } from '../context/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';

function MealDetails() {
  const { addToCart } = useCart();
  const { state } = useLocation();
  const navigate = useNavigate();
  const meal = state?.meal;

  if (!meal) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(meal);
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="btn btn-ghost"
          >
            ← Back to Menu
          </button>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column - Image */}
          <div className="flex flex-col gap-4">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Quick facts */}
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm opacity-70">Preparation Time</p>
                  <p className="font-medium">{meal.prepTime ?? 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm opacity-70">Calories</p>
                  <p className="font-medium">{meal.calories ?? 'N/A'} kcal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold">{meal.name}</h1>
              <p className="text-2xl font-semibold text-primary mt-2">${meal.price.toFixed(2)}</p>
              <p className="text-lg mt-4">{meal.description}</p>
            </div>

            <div className="divider"></div>

            {/* Ingredients */}
            {meal.ingredients && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-lg">{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nutrition */}
            {meal.nutrition && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Nutritional Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  {meal.nutrition.map((item, index) => (
                    <div key={index} className="bg-base-200 p-4 rounded-lg">
                      <p className="font-medium">{item.name}</p>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart */}
            <div className="pt-8">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary btn-lg w-full md:w-auto"
              >
                Add to Cart - ${meal.price.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div id="toast" className="toast toast-end hidden">
        <div className="alert alert-success">
          <span>Item added to cart!</span>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
