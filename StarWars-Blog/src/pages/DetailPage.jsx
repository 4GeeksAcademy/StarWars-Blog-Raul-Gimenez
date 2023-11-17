import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../services/getData';
import getImg from '../services/getImg';

function DetailPage() {
  const [entityDetails, setEntityDetails] = useState({});
  const { entity, id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData({ entity: entity, id: id });
        setEntityDetails(res);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [entity, id]);

  return (
    <div className='d-flex justify-content-center'>
      <div className='m-5 container justify-content-center row rounded-5 p-2' style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
        <div className="col-6 p-2">
          <div className='ratio ratio-4x3'>
            <img src={getImg(entityDetails.properties?.name)} className='rounded-5' style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="" />
          </div>
        </div>
        <div className='col-6 p-2 text-center text-white align-items-center d-flex flex-column justify-content-center'>
          <h1 className='text-warning w-100'>{entityDetails.properties?.name}</h1>
          <p className='w-100 fs-4'>{entityDetails.description}</p>
        </div>
        <hr className="w-100 text-white mt-5" />
        <div className='col-10 row text-center fs-5 mt-2'>
          {Object.keys(entityDetails.properties || {}).map((property) => (
            <div className='col-3 p-1' key={property}>
              <p className='text-warning'>{property}</p>
              <p className='text-white propertie m-2'>{entityDetails.properties[property]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;