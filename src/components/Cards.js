import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle!"
              label="Advanture"
              path="/services"
            />

            <CardItem
              src="images/img-2.jpg"
              text="Travel to Islands of Bali"
              label="Advanture"
              path="/services"
            />

            <CardItem
              src="images/img-6.jpg"
              text="Travel to Islands of Bali"
              label="Advanture"
              path="/services"
            />

            <CardItem
              src="images/img-3.jpg"
              text="Travel to Islands of Bali"
              label="Advanture"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
