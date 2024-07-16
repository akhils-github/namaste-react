import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <div className="res-img-container">
        <img
          className="res-img"
          src={CDN_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>

      <div className="res-card-content">
        <h3>{name}</h3>
        <hr />
        <em>{cuisines.join(", ")}</em>
        <h4>{avgRating} stars</h4>
        {/* <h4>₹{costForTwo / 100} FOR TWO</h4> */}
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
