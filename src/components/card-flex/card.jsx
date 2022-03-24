function Card({ name,version }) {
  return (
    <div className="card">
      <img src={`images/logo-${name}.svg`} alt={`${name} logo`} />
      <h3>Add to {name[0].toUpperCase() + name.slice(1)}</h3>
      <p>Minimum version {version}</p>

      <button className="btn btn--primary">Add & Install Extension</button>
    </div>
  );
}

export default Card;