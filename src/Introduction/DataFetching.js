// 
import React, { useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const url = "https://dummyjson.com/products/add";
  const [data, setData] = useState({
    name: "",
    date: "",
    iduser: ""
  });

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      name: data.name,
      date: data.date,
      iduser: parseInt(data.iduser)
    })
      .then(response => {
        console.log(response.data);
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)} className="boxed">
        <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
        <input onChange={(e) => handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
        <input onChange={(e) => handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"></input>
        <button className="but1">Submit</button>
      </form>
    </div>
  );
}

export default DataFetching;
