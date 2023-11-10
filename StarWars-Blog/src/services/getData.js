export default function getData({ entity, id }) {
    return fetch(`https://www.swapi.tech/api/${entity}/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log("getData", res.results);
        return res.results;
      })
      .catch(err => console.error(err));
  }