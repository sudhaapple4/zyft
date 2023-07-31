import React, { useEffect, useState } from 'react';
//interface to define the structure of the API
interface Post {
    id: number;
    title: string;
    description: string;
  }
//this component is for Task2
const DisplayData = () => {
    const [data, setData] = useState<Post[]>([]);
    //method to fetch the data from api
    const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/products');
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data: Post[] = await response.json();
          //@ts-ignore
        //   console.log(data?.products)
          setData(data?.products);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      //calling the api from useeffect when the page is loaded
    useEffect(()=>{console.log(fetchData())},[])
      //setting the state
  const [searchTerm, setSearchTerm] = useState<string>('');
//handle handleSearchChange
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

//   const filteredData = data.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//logic for filtering data
const filteredData = data.filter((post) => {
    const searchTermLower = searchTerm.toLowerCase();
    const titleLower = post.title.toLowerCase();

    // Check if the title starts and ends with the start and end characters of the search term
    return ((titleLower.startsWith(searchTermLower.charAt(0)) &&
           titleLower.endsWith(searchTermLower.charAt(searchTermLower.length - 1)))
           ||(titleLower.startsWith(searchTermLower.charAt(0)))
           ||
          // (post.title.toLowerCase().includes(searchTermLower))||titleLower.startsWith(searchTermLower.charAt(0)) ||
           titleLower.endsWith(searchTermLower.charAt(searchTermLower.length - 1)));
  });

  return (
    <div className="container mx-auto mt-4">
      <input
        type="text"
        className="w-full px-4 py-2 mb-4"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.title}</td>
              <td className="border px-4 py-2">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
