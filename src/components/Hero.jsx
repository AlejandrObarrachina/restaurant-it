import React, { useEffect } from "react";

export default function Hero() {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/restaurants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRestaurantData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center">
      <article>
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
        <h3>Restaurantes pendientes</h3>
        <section>
          {data ? (
            <div>
              <figure>
                <img src="" alt="foto principal del restaurante" />
                <h4>{restaurantData}</h4>
                <p>{restaurantData}</p>
                <p>Price</p>
              </figure>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </article>
    </div>
  );
}
