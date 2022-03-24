function DropDown(props) {
  return (
    <div className="dropdown">
      <h4>{props.title}</h4>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="arrow"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>

      <p>{props.para}</p>
    </div>
  );
}

export default DropDown;