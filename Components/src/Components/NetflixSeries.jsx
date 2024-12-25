/*

//export const NetflixSeries = () => {
    // below use for 3rd method export 
     const NetflixSeries = () => {

    const name = "Queen of Tears";
    const rating = "8.2 ";
    const summary =
      "Baek Hyun-woo and Hong-in navigate a tense relationship, both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family.";
    const age = 19;
  
    // Determine if the show is available to watch based on age
    const canWatch = age >= 18 ? "Watch now" : "Not Available";
  
    // Return genre of the show
    const returnGenre = () => {
      return "RomCom";
    };
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px" }}>
        <div>
          <img
            src="/image1.jpg"
            alt={name}
            height="200px"
            width="200px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3> {/* Using the `rating` variable */ //} 
      /*  <p>Summary: {summary}</p>
        <p>Genre: {returnGenre()}</p>
        <p>Status: {canWatch}</p>
      </div>
    );
  };
  
  /*
  export default NetflixSeries; // 1nd method use this


  export const Footer = () => {  // 2nd method for this
    return <p>Copyright @golukumartechnical</p>;
  };
  */
/*
  export default NetflixSeries; // 1nd method use this


  export const Header = () => {  // 2nd method for this
    return <p>Copyright @golukumartechnical</p>;
  };

  export const Footer = () => {  // 3rd method for this
    return <p>Copyright @golukumartechnical</p>;
  };

  */


















  import seriesData from "../api/seriesData.json";

  const NetflixSeries = () => {
    return (
      <ul     
      style={{ listStyleType: "none", padding: 0 }}>
        {seriesData.map((series, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              margin: "16px 0",
              borderRadius: "8px",
            }}
          >
            {/* Image */}
            <div>
              <img
                src={series.img_url}
                alt={series.name}
                width="60%"
                height="60%"
                style={{ objectFit: "cover" }}
              />
            </div>
  
            {/* Series Details */}
            <h2>Name: {series.name}</h2>
            <h3>Rating: {series.rating}</h3>
            <p>Summary: {series.description}</p>
            <p>Genre: {series.genre}</p>
            <p>Cast: {series.cast}</p>
  
            {/* Watch Button */}
            <a href={series.watch_url} target="_blank" rel="noopener noreferrer">
              <button>Watch Now</button>
            </a>
          </li>
          
        ))}
      </ul>
    );
  };
  
  export default NetflixSeries;
  