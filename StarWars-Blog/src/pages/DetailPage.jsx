import Card from '../components/Cards'
import GeneralDiv from '../components/GeneralDiv'
import { useParams } from 'react-router-dom';
import getData from '../services/getData';
import { useEffect } from 'react';

function DetailPage() {
  const {entity, id} = useParams()

    useEffect(()=>{
      getData({entity:entity, id:id})
      .then((res)=> console.log(res))
    }, [])

  return (
    <div className='d-flex justify-content-center'>
      <div className='m-5 container justify-content-center row rounded-5 p-2' style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
        <div className="col-6 p-2">
          <div className='ratio ratio-4x3'>
            <img src="https://pbs.twimg.com/media/EW8eYfrXkAMahio.jpg" className='rounded-5' style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="" />
          </div>
        </div>
        <div className='col-6 p-2 text-center text-white align-items-center d-flex flex-column justify-content-center'>
          <h1 className='text-warning w-100'>Darth Vader</h1>
          <p className='w-100 fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente blanditiis, adipisci explicabo repellat minus ab in quisquam vitae eos excepturi voluptatibus minima distinctio aspernatur veritatis velit vel porro! Ipsam!</p>
        </div>
        <hr className="w-100 text-white mt-5" />
        <div className='col-10 row text-center fs-5 mt-2'>
          <div className='col-2 p-1'>
            <p className='text-warning'>Name</p>
            <p className='text-white '>Darth Vader</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage
