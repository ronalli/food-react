import { API_URL } from '../config/config';

const getMealById = async (mealId) => {
  const response = await fetch(`${API_URL}${mealId}`);
  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(`${API_URL}categories.php`);
  return response.json();
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(`${API_URL}filter.php?c=${catName}`);
  return response.json();
};


export {getMealById, getAllCategories, getFilteredCategory}