export default function getData({ entity, id }) {
    return fetch(`https://www.swapi.tech/api/${entity}/${id}`)
      .then(res => res.json())
      .then(res => {
        if(!id){
        console.log("getData", res.results);
        return res.results;
      }
      console.log("getDataId", res.result);
      return {
        properties:res.result.properties,
        description: res.result.description,
        uid: id
      };

      })
      .catch(err => console.error(err));
  }