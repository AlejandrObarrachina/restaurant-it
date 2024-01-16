export const fetchData = async () => {
  const res = await fetch("http://localhost:8080/api/restaurants");
  const data = await res.json();
  setRestaurantData(data);
};
