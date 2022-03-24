function Tab() {
  return (
    <div className="tab">
      <ul className="tab-names">
        <li><div className="tab-name tab-name--active">Simple Bookmarking</div></li>
        <li><div className="tab-name">Speedy Searching</div></li>
        <li><div className="tab-name">Easy Sharing</div></li>
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