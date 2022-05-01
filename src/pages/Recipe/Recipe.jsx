import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Preloader, RecepieItem } from '../../components';
import { getMealById } from '../../services/API/API';
const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return (
    <>{!recipe.idMeal ? <Preloader /> : <RecepieItem recipe={recipe} />}</>
  );
};

export default Recipe;
