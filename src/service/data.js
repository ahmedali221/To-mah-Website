// Import all data files
import ahmedAliData from './Data/AhmedAliData';
import aliData from './Data/AliData';
import mohammedData from './Data/MohammedData';
import yasminData from './Data/YasminData';
import { v4 as uuidv4 } from 'uuid';

// Combine all data into a single array
const productsData = [
  ...ahmedAliData,
  ...aliData,
  ...mohammedData,
  ...yasminData
];

// Generate unique IDs for all products (even if they already have an ID)
const productsWithIds = productsData.map(product => {
  return {
    ...product,
    id: uuidv4() // Generate a new UUID for every product
  };
});

// Normalize price format and clean calories
const normalizedProducts = productsWithIds.map(product => {
  // If price is a string like "15 ريال", convert to number
  let price = product.price;
  if (typeof price === 'string') {
    const priceMatch = price.match(/(\d+)/);
    if (priceMatch) {
      price = parseFloat(priceMatch[1]);
    }
  }

  // Clean calories - remove the word "calories" if present
  let calories = product.calories;
  if (typeof calories === 'string' && calories) {
    // Extract just the numeric part if it contains "calories"
    const caloriesMatch = calories.match(/(\d+)/);
    if (caloriesMatch) {
      calories = caloriesMatch[1];
    }
  }

  // Ensure all products have consistent property names
  return {
    ...product,
    price: price,
    calories: calories,
    name_en: product.meal_name_en || product.name_en || '',
    name_ar: product.meal_name_ar || product.name_ar || '',
    desc_en: product.description_en || product.desc_en || '',
    desc_ar: product.description_ar || product.desc_ar || '',
    // Ensure all products have these properties
    available: product.available !== undefined ? product.available : true,
    trendy: product.trendy !== undefined ? product.trendy : false,
    rating: product.rating !== undefined ? product.rating : 0,
  };
});

export default normalizedProducts;