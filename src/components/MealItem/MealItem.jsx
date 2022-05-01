import { Link, useParams } from 'react-router-dom';

const MealItem = (props) => {
  const { name } = useParams();

  const { idMeal: id, strMeal: title, strMealThumb: image } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt={title} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
      </div>
      <div className='card-action'>
        <Link to={`/meal/${id}`} className='btn'>
          Watch Recepie
        </Link>
      </div>
    </div>
  );
};

export default MealItem;
