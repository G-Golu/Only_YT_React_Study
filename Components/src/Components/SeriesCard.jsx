// eslint-disable-next-line react/prop-types
export const SeriesCard = ({data}) => {
   // console.log(props);
  // eslint-disable-next-line react/prop-types
  const {  img_url, name, rating, description, cast, genre, watch_url} = data;
  
  const btn_style = {

    padding:"1.2rem 2.4rem",
      border: "none",
      fontSize: "1.6rem",
      backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
      color : "var( --btn-color)",
      fontweight: "bold",
      cursor : "pointer",

      

  };

const ratingClass = rating >= 8.5 ? "super_hit" : "average";


  
  return (

          <li className="card">
          
            {/* Image */}
            <div>
              <img  src={img_url} alt={name} width="40%" height="40%" style={{ objectFit: "cover" }}  />
            </div>
            <div className="card-content">

            {/* Series Details */}
            <h2>Name: {name}</h2>
            <h3>
              Rating:
               <span className={`rating ${ratingClass}`}> {rating} </span>
               

                 </h3>

            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
  
            {/* Watch Button */}
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
             
              <button style={btn_style}> Watch Now</button>
               
            
            </a>
            
            </div>
          </li>

    );
}