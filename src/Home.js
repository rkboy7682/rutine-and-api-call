import { useState } from "react";
import Layout from "./Layout";
function Home() {
  const [car, setCar] = useState({ color: "red", brand: "Tvs", model: "2022" });
  function upadate1() {
    return (setCar(previousState => {
      return ({ ...previousState, brand: "bajaj", color: "yellow", model: "2023" })
    }))
  }

  return <div>
    <Layout />
    <br />
    <h2>this is home page. and i have a {car.brand} {car.color} color bike & model is {car.model}</h2>:
    <button type="button" onClick={upadate1}>upadate1</button>

  </div>;
}
export default Home;