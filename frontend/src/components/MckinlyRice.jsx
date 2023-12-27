// import { response } from "express";
import React from "react";
import { useState, useEffect } from "react";

const MckinlyRice = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };

//   const Counter = ()=>{
//     setCount(prev => 
//         prev + 1,

//         );
//   }

  useEffect(() => {
    fetchData();
    setCount(count + 1);
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    // .then(response=> response.json())
    // .then(data=> setData(data))
  }, []);
  return (
    <div className="container">
      <div className="flex items-center  flex-col">
        <h1>Todos:</h1>
        <div className="text-start">
          {data && data.map((item,index) => <li style={{listStyleType:"none"}} key={item.id}> {item.title}</li>)}
        </div>
      </div>
      <div>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        <p>{count}</p>
        {/* <button onClick={Counter}>Add</button> */}
      </div>
    </div>
  );
};

export default MckinlyRice;
