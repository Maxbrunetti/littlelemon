import React from 'react';
import SpecialItem from './SpecialItem';
import bruschettaImage from './images/bruchetta.jpg';
import greekSaladImage from './images/greek-salad.jpg';
import lemonDessertImage from './images/lemon-dessert.jpg';
import './App.css';
import { Link } from 'react-router-dom';

const items = [
  {
    title: 'Bruchetta',
    description: `Our Bruschetta is made from grilled bread that has been smeared with
garlic and seasoned with salt and olive oil. Topped with chopped
tomatoes, oregano and fresh bazil.
`,
    image: bruschettaImage,
  },
  {
    title: 'Greek salad',
    description: `The famous greek salad of crispy lettuce, peppers, olives and
    our Chicago style feta cheese, garnished with crunchy garlic and
    rosemary croutons.`,
    image: greekSaladImage,
  },
  {
    title: 'Lemon dessert',
    description: `This comes straight from grandmas recipe book, every last
    Ingredient has been Source. This is authendic an authentic
    recipe from 50 years ago.`,
    image: lemonDessertImage,
  },
];
function Home() {
  return (
    <>
      <section className="bg-green">
        <div className="w60 g1fr">
          <div className="color-light">
            <h1>Little Lemon</h1>
            <p>
              <strong>Chicago</strong>
            </p>
            <p className="pt-20 mb-20">
              Our menu is a delightful fusion of traditional recipes passed down
              through generations and innovative culinary creations. We source
              the finest, locally sourced ingredients to craft dishes that
              tantalize your taste buds and warm your heart.
            </p>
            <Link to="/reservations" className="btn pt-20 mt-20">
              Reserve a table
            </Link>
          </div>
          <img
            src={require('./images/restaurant chef B.jpg')}
            alt="restaurant"
          ></img>{' '}
        </div>
      </section>
      <section className="w60">
        <div className="flex-end">
          <h2>Specials</h2>
          <Link to="/menu" className="btn btn-light pt-20 mt-20">
            See Menu
          </Link>
        </div>
        <SpecialItem items={items} />
      </section>
    </>
  );
}

export default Home;
