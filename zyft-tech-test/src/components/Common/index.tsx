import { useState,useContext  } from "react";
import { MyContext } from "../MyContext";
import Icon from "../Icon";
interface IData {
  id: number;
  text1?: string;
  text2?: string;
}
const Common = () => {
    //const { data, setData } = useContext(MyContext);
  const dataVal: IData[] = [
    {
      id: 1,
      text1: "Zyft goes shopping with you",
      text2:"Instant price comparisons from multiple websites, all in one place",
    },
    { id: 2, text1: "Track price history and stock levels",text2:'Search for the lowest prices, on the items you shop for every day' },
    { id: 3, text1: "Let’s go shopping",text2:'Select a product to see Zyft in action' },
  ];
  const [sel, setSel] = useState(1);
  console.log(sel)
  //@ts-ignore
  const { data, setData } = useContext(MyContext);
  const handleButtonClick = (e:any,val:any) => {
    setSel(val);
    setData(val);
   
    // console.log(val,sel)
    if(sel===3){
        console.log('here')
        window.open('https://ozdingo.com.au/products/comfee-rangehood-900mm-stainless-steel-kitchen-canopy-filter-replacement-x2', '_blank')
    }
    e.stopPropagation();
  };
  return (
    <div className="container">
      {dataVal.map((val:any) => {
        return (
          <div
            onClick={() => {setSel(val.id);setData(val.id)}}
            key={val.id}
            className={
              sel === val.id
                ? "flex flex-col gap-5 pb-5 border-l-5 border-zorg border-solid border-4 border-r-0 border-t-0 border-b-0 p-4 cursor-pointer"
                : "flex flex-col gap-5 pb-5 border-l-5 border-norg border-solid border-4 border-r-0 border-t-0 border-b-0 p-4 cursor-pointer"
            }
          >
            {/* <div className="grid grid-cols-2"> */}
            <div className="flex flex-row gap-6">
              <Icon
                id={val.id}
                color={sel === val.id ? "#FF0000" : "#ABABAB"}
              />
              <div className="flex flex-col gap-2 justify-center">
              <div className="text-base font-semibold">
                {val.id}. &nbsp; {val.text1}
              </div>
              {sel === val.id && <div className="text-xs text-gray-600 ">
                {val.text2}
              </div>}
              {sel === val.id && <div>
              <button onClick={(e)=>handleButtonClick(e,val.id===1?2:val.id===2?3:3)} className="rounded-full bg-zorg h-10 w-28 text-white">{val.id===3?'Try Zyft Now':'Next Step'}</button> 
              </div>}
              </div>
            </div>
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Common;
