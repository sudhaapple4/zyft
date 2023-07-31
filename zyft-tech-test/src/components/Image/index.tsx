import {useContext} from 'react';
// import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png'
import img31 from '../../assets/31.png'
// import img32 from '../../assets/32.png'
//not used
const Image = () => {
    //@ts-ignore
    const { data } = useContext(MyContext);
    console.log('---data---',data)
  return (
    <div>
        {/* {data===1 && <img src={img1} alt="img1" className="block h-12  md:mx-0 sm:mx-0 pb-2"></img>} */}
        {data===2 && <img src={img2} alt="img2" className="block h-12  md:mx-0 sm:mx-0 pb-2"></img>}
        {data===3 && <img src={img31} alt="img31" className="block h-12  md:mx-0 sm:mx-0 pb-2"></img>}
        {/* {data===3 && <img src={img32} alt="img32" className="block h-12  md:mx-0 sm:mx-0 pb-2"></img>} */}
    </div>
  )
}

export default Image