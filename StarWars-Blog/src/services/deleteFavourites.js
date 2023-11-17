export default function deleteFavourites({ favourites, id, entity }) {
    const updatedFavourites = favourites.filter(favourite => !(favourite.id === id && favourite.entity === entity));
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  }