import styles from "./Netflix.module.css";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const SeriesCard = ({data}) => {
   // console.log(props);
  // eslint-disable-next-line react/prop-types
  const {  img_url, name, rating, description, cast, genre, watch_url} = data;

  
  
 // const btn_style = { };
/*
 const ButtonGolu = styled.button (
  {
    padding:"1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color : "var( --btn-color)",
    fontweight: "bold",
    cursor : "pointer",
  }
);  */

// const btn_style = { };

const ButtonGolu = styled.button ` 
  
    padding: 1.2rem 2.4rem;
    border: none;
    font-Size: 1.6rem;
    background-Color: ${(props) => props.rating >= 8.5 ? "#7dcea0" :" #f7dc6f"};
    color : var( --btn-color);
    font-weight: bold;
    cursor : pointer;
`; // in keyword  ` ~ key press place on no 2 key from top





 const Rating = styled.h3`
 font-size: 1.6rem;
 color : #7dcea0;
 text-transform : capitalize;

 ` ;


const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;


  
  return (

          <li className={styles.card}>
          
            {/* Image */}
            <div>
              <img  src={img_url} alt={name} width="40%" height="40%" style={{ objectFit: "cover" }}  />
            </div>
           {/* <div className={styles["card-content"]}> */}
           <div className="flex flex-col gap-6 py-6 px-6">


            {/* Series Details */}
            <h2>Name: {name}</h2>
            <Rating>
              Rating:
               <span className={`${styles.rating} ${ratingClass}`}> {rating} </span>
               
                 </Rating>


            <p className="text-3xl font-bold underline text-blue-600 ">Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
  
            {/* Watch Button */}
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
             
             {/* <button style={btn_style}> Watch Now</button> */}
              <ButtonGolu rating={rating}> Watch Now</ButtonGolu>
              
               
            
            </a>
            
            </div>
          </li>

    );
}