import Card from "./card";

function CardFlex() {
  const data = [
    {name: "Chrome",version:62},
    {name: "Firefox",version:55},
    {name: "Opera",version:46},
  ]

  return (
    <div className="card-flex">
      {data.map(( card,index ) => <Card key={index} name={card.name} version={card.version} />)}
    </div>
  );
}

export default CardFlex;