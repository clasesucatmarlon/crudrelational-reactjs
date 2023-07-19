import { useState, useEffect } from "react";
import ShowPerson from "./ShowPerson";

function App() {

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/person/list");
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.log("Error al recuperar los datos:", error);
  //   }
  // };

  return (
    <div>
      <h1>CRUD System</h1>
 
      <ShowPerson />
    </div>
  );
}

export default App;
