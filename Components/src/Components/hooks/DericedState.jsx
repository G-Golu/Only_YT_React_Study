import { useState } from "react";

{/*
const users = [
    
    { name: "Alice", age : 25},
    { name: "Bob", age : 30},
    { name: "Charlie", age : 35},
    { name: "Angles", age : 45},
    
]; */}

export const DerivedState = () => {

// create a hook for DerivedState
const [users, ] = useState([
    
    { name: "Alice", age : 25},
    { name: "Bob", age : 30},
    { name: "Charlie", age : 35},
    { name: "Angles", age : 45},
    
]);


    
    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((curElem, index) => {
                        
                    return (
                    <li key={index}>
                        {curElem.name} - {curElem.age} years old
                    </li>
                    );
                })}
            </ul>
            </div>
    );
};