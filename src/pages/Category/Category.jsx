import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MealList, Preloader } from '../../components';
import { getFilteredCategory } from '../../services/API/API';

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
};

export default Category;
