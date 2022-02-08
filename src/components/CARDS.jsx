import React from "react";
import locationIcon from "../assets/locationIcon.svg";

export default function Cards(props) {
  return (
    <main>
      <div className="cardHolder">
        <img src={props.cardImage} alt={props.locationName} className="cardImage" />
        <article className="cardText">
          <div className="location">
            <img src={locationIcon} alt="gps icon" className="locationIcon" />
            <span className="locationName">{props.locationName}</span>
            <a href={props.locationMapLink} className="locationMapLink">
              View on Google Maps
            </a>
          </div>

          <p className="cardTitle">{props.cardTitle}</p>
          <p className="cardSubtitle">{props.date.first} - {props.date.second}</p>
          <p className="cardDescription">
            {props.description}
          </p>
        </article>
      </div>
    </main>
  );
}
