function DropDown(props) {
  return (
    <div className="dropdown">
      <h2>{props.title}</h2>
      <img src="images/icon-arrow.svg" alt="dropdown arrow" className="arrow arrow--active" />

      <p>{props.para}</p>
    </div>
  );
}

export default DropDown;