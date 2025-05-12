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
                alt={meal.name_en || meal.name}
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
                <div>
                  <p className="text-sm opacity-70">Difficulty</p>
                  <p className="font-medium">{meal.difficulty_en ?? 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm opacity-70">Servings</p>
                  <p className="font-medium">{meal.servings ?? 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm opacity-70">Vegetarian</p>
                  <p className="font-medium">{meal.isVegetarian ? 'Yes' : 'No'}</p>
                </div>
                <div>
                  <p className="text-sm opacity-70">Vegan</p>
                  <p className="font-medium">{meal.isVegan ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold">{meal.name_en}</h1>
              {meal.name && (
                <h2 className="text-2xl font-semibold text-gray-600">{meal.name}</h2>
              )}
              <p className="text-2xl font-semibold text-primary mt-2">${meal.price.toFixed(2)}</p>
              <p className="text-lg mt-4">{meal.desc_en}</p>
              {meal.description && (
                <p className="text-lg mt-2 text-gray-600">{meal.description}</p>
              )}
            </div>

            <div className="divider"></div>

            {/* Ingredients */}
            {meal.ingredients_en && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {meal.ingredients_en.map((ingredient, index) => (
                    <li key={index} className="text-lg">{ingredient}</li>
                  ))}
                </ul>
                {meal.ingredients && (
                  <ul className="list-disc pl-6 space-y-2 mt-4 text-lg text-gray-600">
                    {meal.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Notes */}
            {(meal.notes_en ) && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Notes</h2>
                {meal.notes_en && <p className="text-lg">{meal.notes_en}</p>}
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
