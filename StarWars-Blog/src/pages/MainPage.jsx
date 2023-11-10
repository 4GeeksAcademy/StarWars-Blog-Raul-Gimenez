import { useEffect, useState } from 'react'
import Card from '../components/Cards'
import GeneralDiv from '../components/GeneralDiv'
import getData from '../services/getData'

function MainPage() {
    const [peopleList, setPeopleList] = useState([])
    const [planetsList, setPlanetsList] = useState([])
    const [starshipsList, setStarshipsList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const peopleResponse = await getData({ entity: 'people', id:"" });
            const peopleNames = peopleResponse.map((person) => person.uid);
            setPeopleList(peopleNames);
          } catch (error) {
            console.error('Error fetching people data:', error);
          }
      
          try {
            const planetsResponse = await getData({ entity: 'planets', id:"" });
            const planetsNames = planetsResponse.map((planet) => planet.uid);
            setPlanetsList(planetsNames);
          } catch (error) {
            console.error('Error fetching planets data:', error);
          }
      
          try {
            const starshipsResponse = await getData({ entity: 'starships', id:"" });
            const starshipsNames = starshipsResponse.map((starship) => starship.uid);
            setStarshipsList(starshipsNames);
          } catch (error) {
            console.error('Error fetching starships data:', error);
          }
        };
      
        fetchData();
      }, []);

    return (
        <>
            <div>
                <GeneralDiv title="Characters" height="auto">
                    {
                        peopleList.map((person) => {
                            return (
                                <Card
                                    img="https://i.pinimg.com/originals/f1/26/e7/f126e762bcdb32fd401ff861ddd1390a.jpg"
                                    detail="/detail"
                                ></Card>
                            )
                        })
                    }
                </GeneralDiv>
                <GeneralDiv title="Starships" height="auto">
                    <Card
                        img="https://i.pinimg.com/originals/f1/26/e7/f126e762bcdb32fd401ff861ddd1390a.jpg"
                        detail="/detail"
                    ></Card>
                </GeneralDiv>
            </div>
            {/* <div>
        <GeneralDiv title="Characters" height="auto">
          <Card
          img="https://frikipolis.com/wp-content/uploads/2023/07/star-wars-the-black-series-darth-vader-obi-wan7.jpg"
          detail="/detail"
          ></Card>
        </GeneralDiv>
        <GeneralDiv title="Starships" height="auto">
          <Card
          img="https://i.pinimg.com/originals/f1/26/e7/f126e762bcdb32fd401ff861ddd1390a.jpg"
          detail="/detail"
          ></Card>
        </GeneralDiv>
      </div> */}
        </>
    )
}

export default MainPage
