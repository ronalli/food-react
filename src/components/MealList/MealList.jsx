import MealItem from '../MealItem/MealItem';

const MealList = (props) => {
  const { meals = [] } = props;
  return (
    <div className='list'>
      {meals.map((el) => {
        return <MealItem key={el.idMeal} {...el} />;
      })}
    </div>
  );
};

export default MealList;
