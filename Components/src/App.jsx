/*
// Import React and necessary dependencies
//import React from "react";
import{ NetflixSeries , Footer} from "./Components/NetflixSeries";
export const App = () => {
  return (
    <div>
      {/* Render multiple NetflixSeries components */
      /*
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer />
      
    </div>
  );
};

*/




/*
 
// 3rd method for use export method 
    import NetflixSeries , {Footer , Header} from"./Components/NetflixSeries";

export const App = () => {
  return (
    <div>
      {/* Render multiple NetflixSeries components */ //}
      
      /*
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer />
      <Header />
      
    </div>
  );
};



*/












//import "./Components/EventHandling.jsx";
//import NetflixSeries from "./Components/NetflixSeries";
//import "./Components/Netflix.css";
//import "./Components/Netflix.module.css"
//import { EventHandling } from "./Components/EventHandling.jsx";
//import { EventProps } from "./Components/EventProps.jsx";
//import "./Components/EV.css";
//import { EventPropgation } from "./Components/EventPropgation.jsx";

       { /* <h1 className="card-heading">List of Best NetflixSeries</h1> */ }
    { /* <NetflixSeries/>; */ }

    { /*  <EventHandling/> */ }
    { /*  <EventProps/> */ }
    { /*  <EventPropgation/> */ }
    
    
    import "./Components/EV.css";
    import {  State } from "./Components/hooks/State";
    export const App = () => {
      
      return ( <section className="container">
        <State />
        <Sibling/>
      </section>

    );
    
 
};


export function Sibling(){
  console.log("Child Component rendered");
  return(
  <div className="main-div">
    <h2>Child Component </h2>
    </div>
  );
}



