import Card from "./card";

function CardFlex() {
  const data = [
    {name: "chrome",version:62},
    {name: "firefox",version:55},
    {name: "opera",version:46},
  ]

  return (
    <div className="card-flex">
      {data.map(( card,index ) => <Card key={index} name={card.name} version={card.version} />)}
    </div>
  );
}

export default CardFlex;