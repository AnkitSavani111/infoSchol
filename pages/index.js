import Card from './components/Card'
import Navbar from './components/Navbar'
import axios from "axios";
import { useState } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from 'react';

// const data2 =

export default function Home() {
  const MySwal = withReactContent(Swal);
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);


  const loadData = async () => {
    MySwal.fire({
      title: "Loading...",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => {
        MySwal.showLoading();
      },
    });

    console.log("Loading data...");

    const options = { method: 'GET', url: 'http://localhost:4000/scholarships' };
    await axios.request(options).then(function (response) {
      // console.log(response.data);
      setData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    await setLoaded(true);
    MySwal.close();
  }

  if (!loaded) { loadData() };

  return (
    <>
      <Navbar search={true} />
      <div className='row flex justify-content-center m-0'>
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            award={item.award}
            image={item.image}
            education={item.education}
            website={item.website}
            slug={item._id}
          />
        ))}
      </div>
    </>
  )
}