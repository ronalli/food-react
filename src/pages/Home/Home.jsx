import { useState, useEffect } from 'react';
import { getAllCategories } from '../../services/API/API';
import { CategoryList, Preloader } from '../../components';

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
};

export default Home;
