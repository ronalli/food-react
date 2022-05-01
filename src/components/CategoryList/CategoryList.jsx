import CategoryItem from '../CategoryItem/CategoryItem';
import './categoryList.css';

const CategoryList = (props) => {
  const { catalog } = props;
  return (
    <div className='list'>
      {catalog.map((el) => {
        return <CategoryItem key={el.idCategory} {...el} />;
      })}
    </div>
  );
};

export default CategoryList;
