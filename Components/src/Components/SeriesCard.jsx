// eslint-disable-next-line react/prop-types
export const SeriesCard = ({data}) => {
   // console.log(props);
  // eslint-disable-next-line react/prop-types
  const { id, img_url, name, rating, description, cast, genre, watch_url} = data;
  return (

          <li>
          
            {/* Image */}
            <div>
              <img
                src={img_url}
                alt={name}
                width="60%"
                height="60%"
                style={{ objectFit: "cover" }}
              />
            </div>
  
            {/* Series Details */}
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
  
            {/* Watch Button */}
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
              <button>Watch Now</button>
            </a>
          </li>

    );
}