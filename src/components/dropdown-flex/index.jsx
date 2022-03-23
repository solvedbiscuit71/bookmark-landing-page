import Dropdown from "./dropdown";

function DropdownFlex() {
  const data = [
    {
      title: "What is Bookmark?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      title: "How can I request a new browser?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      title: "Is there a mobile app?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      title: "What about other Chromium browsers?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    }
  ]

  return (
    <div className="dropdown-flex">
      { data.map(( dropdown,index ) => <Dropdown key={index} title={dropdown.title} para={dropdown.para} />)}
    </div>
  );
}

export default DropdownFlex;