import "./EV.css";

export const EventHandling = () => {
    
 //   function handleButtonClick() {
  //      alert ("Hey I am onClick Event ");
  //  }


  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert ("Hey I am onClick Event ");
  };
  
const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome `);

};

    return (
        <>
       { /* // ? function components with named function */
       // Remember how we haven't called this function , if you call this function here then it will
       // run without even clicking . you just need to pass refrence and not call here.
       }

        <button onClick={handleButtonClick} > click me </button>
        <br/>
        <button onClick={(event) => handleButtonClick(event)}>click me 2 </button>
        <br/>

        {/* //? Inline Event Handlers */}

        <button onClick={(event) => console.log(event) }> Inline Function </button>
        <br/>
         {/* //? Function Componenets with inline Arrow Function */}

         <button onClick={()=> alert("Hey I am Inline event function")}> Inline Arr function </button>

         {/* //? Passing Arguments to Event Handlers */}

         {/* <button onClick={handleWelcomeUser("Golu")} > click me </button> */}
         <button onClick={() => handleWelcomeUser("Golu")} > click me </button>
         <button onClick={() => handleWelcomeUser("GK")} > click me </button>
        </>
    );
};
