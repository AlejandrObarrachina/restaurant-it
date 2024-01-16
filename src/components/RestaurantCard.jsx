import React from "react";

export default function RestaurantCard({ restaurant }) {
  return (
    <div>
      <figure className="flex row gap-5 mt-10 px-8 py-4 rounded-md border-[2px] border-amber-600 border-solid blueShadow w-[42rem] h-[15rem]">
        <div className="flex-none w-48 relative">
          <img
            src={restaurant.imageUrl}
            alt={`main picture of ${restaurant.name}`}
            className="h-auto"
          />
        </div>
        <div className="flex flex-auto p-6 gap-5 place-items-center">
          <h4>{restaurant.name}</h4>
          <p>{restaurant.gastronomy}</p>
          <p>{restaurant.rating}⭐</p>
          <p>{"€".repeat(restaurant.price)}</p>
        </div>
      </figure>
    </div>
  );
}
