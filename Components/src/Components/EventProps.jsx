export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert (`Hey, ${user}`);
    };

    const handleHover = () => {
        alert (`Hey Thanks for hovering me `);
    };

    return (
        <>

         <WelcomeUser
          onClick = {()=> HandleWelcomeUser("Golu kumar")}
         onMouseEnter = {handleHover} 
         />

        </>
    );
    
};

const WelcomeUser = (props) => {
    const { onClick, onMouseEnter, onMouseLeave } = props;
    const handleGreeting = () => {
       console.log(`Welcome User, Welcome`);
       onClick();
    };
    return (
            <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
            </>
    );
};