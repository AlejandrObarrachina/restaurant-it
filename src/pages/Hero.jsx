import React, { useState, useEffect } from "react";
import Link from "../components/Link";
import RestaurantCard from "../components/RestaurantCard";

export default function Hero() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/restaurants");
      const data = await res.json();
      setRestaurantData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center ">
      <article className="text-center">
        <h1 className="uppercase font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
          Restaurant EAT/IT
        </h1>
        <p className="text-sm md:text-base font-light">
          <span className="font-bold text-lg">SAVE, TRY AND RATE</span>{" "}
          restaurants so you don't forget to experiment the best of the
          existence (food)
        </p>
      </article>
      <article>
        <div className="max-h-[65vh] overflow-scroll border border-solid border-orange-400 border-opacity-80 p-4 rounded-md">
          <h3 className="text-4xl left-0 font-semibold text-center">
            Restaurants waiting for you
          </h3>
          <section className="flex flex-col items-center justify-center mt-1">
            {restaurantData ? (
              restaurantData.map((restaurant) => {
                return <RestaurantCard restaurant={restaurant} />;
              })
            ) : (
              <p>Loading...</p>
            )}
          </section>
        </div>
      </article>
      <Link to={"/add"}>Add to list</Link>
    </div>
  );
}
