import { useNavigate } from 'react-router-dom';

const RecepieItem = (props) => {
  const navigate = useNavigate();
  const { recipe } = props;
  return (
    <div className='recipe-info'>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <h6>Category: {recipe.strCategory}</h6>
      {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
      <p>{recipe.strInstructions}</p>
      <table className='striped'>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recipe).map((key) => {
            if (key.includes('Ingredient') && recipe[key]) {
              return (
                <tr key={key}>
                  <td>{recipe[key]}</td>
                  <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      {recipe.strYoutube ? (
        <div className='row'>
          <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
          {
            <iframe
              width='850'
              height='480'
              title={recipe.idMeal}
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                -11
              )}`}
              frameBorder='0'
              allowFullScreen
              ng-show='showvideo'
            />
          }
        </div>
      ) : null}
      <button className='btn' onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default RecepieItem;

// <table>
//         <tbody>
//           <tr>
//             <td>Alvin</td>
//             <td>Eclair</td>
//             <td>$0.87</td>
//           </tr>
//           <tr>
//             <td>Alan</td>
//             <td>Jellybean</td>
//             <td>$3.76</td>
//           </tr>
//           <tr>
//             <td>Jonathan</td>
//             <td>Lollipop</td>
//             <td>$7.00</td>
//           </tr>
//         </tbody>
//       </table>
