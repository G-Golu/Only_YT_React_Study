 import "./EV.css";
 export const EventPropgation = () => {
    const handleGrandParent = () => {
        console.log ("GrandParent clicked");
    };

    const handleParentClick = () => {
        console.log ("Parent clicked");
    };

    const handleChildClick = (event ) => {
        console.log(event);
        event.stopPropagation();
        console.log("child clicked");
    };

    
    
    return (
        <section className = "main-div">
            <div className="g-div" onClickCapture=
            {
                handleGrandParent
            }>
                <div className = "p-div" onClickCapture =
                {handleParentClick}>
                    <button className = "c-div" onClickCapture ={
                        handleChildClick
                    }>
                        child Div
                        </button>
                </div>
            </div>
        </section>
    );
};