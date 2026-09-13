import { CDN_URL } from "../utils/constants";

const backgroundColor = {
    backgroundColor: "#f0f0f0"
}
const CardComponent = (props) => {
    //destructuring on the fly, where new variables should have same name as the key of the object, otherwise it will give undefined
    const { cloudinaryImageId, name, cuisines, avgRatingString, sla, costForTwo } = props?.resData?.info;
    return (
        <div className="cardComp" style={backgroundColor}>
            <img className="card-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4 className="cuisineWords">{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default CardComponent;