export default function addFavourite({ favourites, name, entity, id }) {
    const favourite = { name: name, entity: entity, id: id };
    const updatedFavourites = [...favourites, favourite];
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  }