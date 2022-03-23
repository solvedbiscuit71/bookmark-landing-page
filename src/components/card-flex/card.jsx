function Card({ name,version }) {
  return (
    <div className="card">
      <img src={`images/logo-${name}.svg`} alt={`${name} logo`} />
      <h2>Add to {name}</h2>
      <p>Minimum version {version}</p>

      <button className="btn btn--primary">Add & Install Extension</button>
    </div>
  );
}

export default Card;