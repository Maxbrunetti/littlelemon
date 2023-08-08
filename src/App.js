import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

import bruschettaImage from './images/bruchetta.jpg';
import greekSaladImage from './images/greek-salad.jpg';
import lemonDessertImage from './images/lemon-dessert.jpg';
import SpecialItem from './SpecialItem';

/** @jsxImportSource react */

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

function App() {
  return (
    <Router>
      <>
        <meta name="og:title" content="Little Lemon restaurant" />
        <meta name="og:description" content="serving Italian food since 2019" />
        <meta name="og:image" content="" />
        <header></header>
        <NavBar />
        <main>
          <section className="bg-green">
            <div className="w60 g1fr">
              <div className="color-light">
                <h1>Little Lemon</h1>
                <p>
                  <strong>Chicago</strong>
                </p>
                <p className="pt-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  onClick={() => console.log('clicked')}
                  className="btn btn-light pt-20 mt-20"
                >
                  Reserve a table
                </button>
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
              <button className="btn btn-light">Order Menu</button>
            </div>
            <SpecialItem items={items} />
          </section>
        </main>
        <footer></footer>
      </>
    </Router>
  );
}

export default App;
