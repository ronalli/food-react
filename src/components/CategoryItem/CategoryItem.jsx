import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
  const {
    idCategory: id,
    strCategory: category,
    strCategoryThumb: image,
    strCategoryDescription: description,
  } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt={category} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{category}</span>
        <p>{description.slice(0, 60)}...</p>
      </div>
      <div className='card-action'>
        <Link to={`/category/${id}`} className='btn'>
          Watch Category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
