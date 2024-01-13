export const fetchAllRestaurants = async () => {
  try {
    fetch("http://localhost:8080/restaurants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  } catch (error) {
    throw error;
  }
};
