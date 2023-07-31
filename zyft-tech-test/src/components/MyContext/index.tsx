import React, { createContext, useState } from 'react';
//used context api to handle images on the right side column based on the selected section
type MyContextType = {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
};

const MyContext = createContext<MyContextType | undefined>(undefined);
//@ts-ignore
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(1);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
