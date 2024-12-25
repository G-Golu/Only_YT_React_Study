import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <NetflixSeries />
      <NetflixSeries /> 
      <NetflixSeries />
      <NetflixSeries />
    </Fragment>
  );
};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img
          src="/image1.jpg"
          alt="Queen of Tears"
          style={{ height: "40%", width: "40%" }}
        />
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Rating: 8.2</h3>
      <p>
        Summary: Baek Hyun-woo and Hong-in navigate a tense relationship, both
        at home and at work. Upon deciding his future, Hyun-woo pays a visit to
        his family.
      </p>
    </div>
  );
};
