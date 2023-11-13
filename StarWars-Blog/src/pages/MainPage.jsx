import React, { useEffect, useState } from 'react';
import Card from '../components/Cards';
import GeneralDiv from '../components/GeneralDiv';
import getData from '../services/getData';
import getImg from '../services/getImg';

function MainPage() {
  const [peopleList, setPeopleList] = useState([]);
  const [starshipsList, setStarshipsList] = useState([]);
  const [planetsList, setPlanetsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const peopleResponse = await getData({ entity: 'people', id: '' });
        const peopleDetails = await Promise.all(
          peopleResponse.map(async (person) => {
            const details = await getData({ entity: 'people', id: person.uid });
            return {
              uid: person.uid,
              properties: details.properties,
            };
          })
        );
        setPeopleList(peopleDetails);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }

      try {
        const starshipsResponse = await getData({ entity: 'starships', id: '' });
        const starshipDetails = await Promise.all(
          starshipsResponse.map(async (starship) => {
            const details = await getData({ entity: 'starships', id: starship.uid });
            return {
              uid: starship.uid,
              properties: details.properties,
            };
          })
        );
        setStarshipsList(starshipDetails);
      } catch (error) {
        console.error('Error fetching starships data:', error);
      }

      try {
        const planetsResponse = await getData({ entity: 'planets', id: '' });
        const planetsDetails = await Promise.all(
          planetsResponse.map(async (planet) => {
            const details = await getData({ entity: 'planets', id: planet.uid });
            return {
              uid: planet.uid,
              properties: details.properties,
            };
          })
        );
        setPlanetsList(planetsDetails);
      } catch (error) {
        console.error('Error fetching planets data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <GeneralDiv title="Characters" height="auto">
          {peopleList.map((person) => (
            <Card
              key={person.uid}
              img={getImg(person.properties.name)}
              detail={`/detail/people/${person.uid}`}
              title={person.properties.name}
              description={
                <div>
                  Gender: {person.properties.gender}<br />
                  Eye color: {person.properties.eye_color}<br />
                  Hair color: {person.properties.hair_color}
                </div>
              }
            />
          ))}
        </GeneralDiv>
        <GeneralDiv title="Starships" height="auto">
          {starshipsList.map((starship) => (
            <Card
              key={starship.uid}
              img={getImg(starship.properties.name)}
              detail={`/detail/starships/${starship.uid}`}
              title={starship.properties.name}
              description={
                <div>
                  Model: {starship.properties.model}<br />
                  Starship Class: {starship.properties.starship_class}
                </div>
              }
            />
          ))}
        </GeneralDiv>
        <GeneralDiv title="Planets" height="auto">
          {planetsList.map((planet) => (
            <Card
              key={planet.uid}
              img={getImg(planet.properties.name)}
              detail={`/detail/planets/${planet.uid}`}
              title={planet.properties.name}
              description={
                <div>
                  Population: {planet.properties.population}<br />
                  Climate: {planet.properties.climate}<br />
                  Terrain: {planet.properties.terrain}
                </div>
              }
            />
          ))}
        </GeneralDiv>
      </div>
    </>
  );
}

export default MainPage;