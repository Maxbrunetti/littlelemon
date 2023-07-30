import './App.css';
/** @jsxImportSource react */

function App() {
  return (
    <>
      <meta name="og:title" content="Little Lemon restaurant" />
      <meta name="og:description" content="serving Italian food since 2019" />
      <meta name="og:image" content="" />
      <header></header>
      <nav className="nav w60 g1fr">
        <img className="nav-logo" src="" alt="logo" />
        <ul className="nav-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order online</a>
          </li>
        </ul>
      </nav>
      <main>
        <section className="bg-green">
          <div className="w60 g1fr">
            <div className="color-light">
              <h1>Little Lemon</h1>
              <p>
                <strong>Chicago</strong>
              </p>
              <p className="pt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <div className="specials">
            <div className="special-item">
              <img
                src={require('./images/greek-salad.jpg')}
                alt="greek salad"
              ></img>
              <h3>Greek salad</h3>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.{' '}
              </p>
              <p>
                <strong>Order a delivery 🛵</strong>
              </p>
            </div>
            <div className="special-item">
              <img
                src={require('./images/bruchetta.png')}
                alt="greek salad"
              ></img>
              <h3>Bruschetta</h3>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil. Topped with
                chopped tomatoes, oregano and fresh bazil.
              </p>
              <p>
                <strong>Order a delivery 🛵</strong>
              </p>
            </div>
            <div className="special-item">
              <img
                src={require('./images/lemon-dessert.jpg')}
                alt="greek salad"
              ></img>
              <h3>Lemon dessert</h3>
              <p>
                This comes straight from grandmas recipe book, every last
                Ingredient has been Source. This is authendic an authentic
                recipe from 50 years ago.
              </p>
              <p>
                <strong>Order a delivery 🛵</strong>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
