import { Link } from 'react-router-dom';
import MealItem from '../MealItem/MealItem';

const MealList = (props) => {
  const { meals = [] } = props;
  return (
    <>
      <Link className='btn' to='/'>
        Go Back
      </Link>
      <div className='list'>
        {meals.map((el) => {
          return <MealItem key={el.idMeal} {...el} />;
        })}
      </div>
    </>
  );
};

export default MealList;
