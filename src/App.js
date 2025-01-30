import './App.css';
import Categoryitem from './Componenets/Category-item/Categoryitem';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imgUrl : 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'sneakers',
      imgUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 3,
      title: 'men',
      imgUrl : 'https://i.ibb.co/R70vBrQ/men.png',
    },
    {
      id: 4,
      title: 'women',
      imgUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'jackets',
      imgUrl : 'https://i.ibb.co/px2tCc3/jackets.png  ',
    },
  ]

  return (
    <div className='categories-container'>
      {categories.map((category) => (
       <Categoryitem key={category.id} category={category}/>
      ))}
    </div>
  );
};

export default App;
