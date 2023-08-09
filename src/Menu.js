import './Menu.css';
function Menu() {
  return (
    <div className={'menuContainer'}>
      <h1>Italian/Mediterranean Menu</h1>
      <table className={'menuTable'}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Caprese Salad</td>
            <td>Tomatoes, fresh mozzarella, basil, balsamic glaze</td>
            <td>10.99</td>
          </tr>
          <tr>
            <td>Bruschetta</td>
            <td>Toasted baguette, diced tomatoes, garlic, olive oil</td>
            <td>8.49</td>
          </tr>
          <tr>
            <td>Pasta Carbonara</td>
            <td>Spaghetti, pancetta, egg yolks, parmesan</td>
            <td>15.99</td>
          </tr>
          <tr>
            <td>Chicken Piccata</td>
            <td>Breaded chicken, capers, lemon butter sauce</td>
            <td>18.99</td>
          </tr>
          <tr>
            <td>Seafood Risotto</td>
            <td>Arborio rice, shrimp, mussels, saffron</td>
            <td>22.99</td>
          </tr>
          <tr>
            <td>Eggplant Parmesan</td>
            <td>Breaded eggplant, marinara, melted mozzarella</td>
            <td>16.49</td>
          </tr>
          <tr>
            <td>Tiramisu</td>
            <td>Coffee-soaked ladyfingers, mascarpone, cocoa</td>
            <td>7.99</td>
          </tr>
          <tr>
            <td>Cannoli</td>
            <td>Ricotta-filled pastry, chocolate chips, pistachios</td>
            <td>6.49</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
