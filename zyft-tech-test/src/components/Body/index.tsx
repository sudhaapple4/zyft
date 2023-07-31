import {useContext } from 'react';
import { MyContext } from '../MyContext';
import img1Logo from '../../assets/img11.png';
import img2Logo from '../../assets/img12.png';
import img3Logo from '../../assets/test1.png';
// import zyftlogo from '../../assets/zyft.png';
//component to show step1,2,3
import Common from "../Common";
// import Image from '../Image';
const Body = () => {

    //@ts-ignore
    const { data } = useContext(MyContext);

  return (
    <div className="bg-blue-100 h-98 w-98 ">
      <div className="mx-24">
        <div className="pt-6 flex flex-col">
          <span className="text-3xl font-semibold">How does Zyft work?</span>
          <span className="text-sm text-gray-600 ">
            Search over 1 million products across 35,000+ Australian retailers
          </span>
        </div>
        <div className="border-l border-gray-400 p-0 container mx-auto mt-4 grid grid-cols-2 gap-0">
          <div className="">
            <Common />
          </div>
          <div className="h-20 w-20">
          {data===1 && <img src={img1Logo} alt="img1Logo" style={{width:'100rem',height:'15rem'}}></img>}
          {data===2 && <img src={img2Logo} alt="img2Logo" style={{width:'50rem',height:'15rem'}}></img>}
          {data===3 && <img src={img3Logo} alt="img3Logo" style={{width:'50rem',height:'15rem'}}></img>}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
//text-4xl font-semibold
