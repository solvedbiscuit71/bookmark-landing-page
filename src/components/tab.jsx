import React, { useState } from 'react';

function Tab() {
  const data = [
    {
      name: "Simple Bookmarking",
      title: "Bookmark in one click",
      para: `
        Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.
      `
    },
    {
      name: "Speedy Searching",
      title: "Intelligent search",
      para: `
        Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.
      `
    },
    {
      name: "Easy Sharing",
      title: "Share your bookmarks",
      para: `
        Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.
      `
    }
  ]
  const [cur,setCur] = useState(0)

  return (
    <div className="tab">
      <ul className="tab-names">
        { data.map(( tab,index ) => <li key={index}><div onClick={() => setCur(index)} className={`tab-name ${index === cur ? "tab-name--active" : ""}`}>{tab.name}</div></li>)}
      </ul>

      <div className="tab-content">
        <img src={`images/illustration-features-tab-${cur + 1}.svg`}alt="illustration image for features tab" />

        <h3>{data[cur].title}</h3>
        <p>{data[cur].para}</p>
        <button className="btn btn--primary">More Info</button>
      </div>
    </div>
  );
}

export default Tab;