export default function getFavourites() {
    const favourites = localStorage.getItem("favourites");
    if (!favourites) {
      console.log(favourites);
      return [];
    }
  
    return JSON.parse(favourites);
  }