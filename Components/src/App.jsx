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













import NetflixSeries from "./Components/NetflixSeries";
//import "./Components/Netflix.css";
import "./Components/Netflix.module.css"
export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best NetflixSeries</h1>
      <NetflixSeries/>;
      </section>
    
  );
 
};
      

