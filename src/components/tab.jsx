function Tab() {
  return (
    <div className="tab">
      <ul className="tab-names">
        <li className="tab--active">Simple Booking</li>
        <li>Speedy Searching</li>
        <li>Easy Sharing</li>
      </ul>

      <div className="tab-content">
        <img src="images/illustration-features-tab-1.svg" alt="illustration image for features tab" />

        <h2>Bookmark in one click</h2>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop interface 
          gives you complete control over how you manage your favourite sites.
        </p>

        <button className="btn btn--primary">More Info</button>
      </div>
    </div>
  );
}

export default Tab;