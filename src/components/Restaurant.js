import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { cards } = resInfo;
  if (!cards || cards.length < 5) return <div>No menu available</div>;

  const { name, cuisines, costForTwoMessage } =
    cards[2]?.card?.card?.info || {};

  const { itemCards } =
    cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  const categories = cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className=" font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurant;
//key={category?.card?.card.title}
