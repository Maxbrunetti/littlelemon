function SpecialItem({ items }) {
  const specials = items.map((item, i) => {
    return (
      <div className="special-item" key={i}>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>
          <strong>Order a delivery 🛵</strong>
        </p>
      </div>
    );
  });
  return <div className="specials">{specials}</div>;
}
export default SpecialItem;
