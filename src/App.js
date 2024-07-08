import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { apiUrl, filterData } from "./data";
import Filter from "./Components/Filter";
import { toast } from "react-toastify";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  //creating loading while fetching the data
  const [loading, setLoading] = useState(true);
  //creating a state for filter
  const [category , setCategory]=useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output
      setCourses(output.data);
    } catch (error) {
      toast.error("something went wrong which fetching");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div >
        <Navbar></Navbar>
      </div>
      <div  >
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div className="w-11/22 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">{loading ? <Spinner /> : <Cards courses={courses} category= {category}/>}</div>
      </div>
    </div>
  );
};

export default App;
