import { useState } from "react";
import ItemList from "./itemList";

//controled component, state is now being controlled restaurant.js component now.
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/** Header */}
      <div className=" w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className=" font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <button
              onClick={() => {
                setShowIndex(null);
              }}
            >
              🔽
            </button>
          </span>
        </div>
        {/** Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
