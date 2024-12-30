import { useEffect, useState } from "react";
// here use icon , mdcheck , and md delete forever
import { MdCheck , MdDeleteForever } from "react-icons/md";

import "./ToDo.css";
export const ToDo = () => {
    const [inputValue, setInputValue] = useState ();
    const [task, setTask] = useState ([]);
    const[dateTime, setDateTime] = useState ("");

   
    const handleInputChange = (value) => {
        setInputValue(value);
    };


  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    
    if (task.includes(inputValue)) {
         
       setInputValue (" "); 
     return;
    }
    
    setTask((prevTask) => [...prevTask, inputValue]);
    
    setInputValue("");
   
    
  };
  /// console.log('hey Ram');
    

  

  // ToDO Date and Time
  
   useEffect(() => {
    const interval = setInterval(() => {
    
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setDateTime(`${formatedDate} - ${formatedTime}`);
     
      }, 1000);
      
     return () => clearInterval(interval);
      
   }, []);

  
  
    
    return (
        <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
                <h2 className="date-time">{dateTime} </h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                    </div>
                    <div>
                       <button type="submit" className="todo-btn">
                        Add Task
                        </button> 
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                {/** here use in button , icon past */}
                                <button className="check-btn"><MdCheck /></button>
                                <button className="delete-btn"><MdDeleteForever /> </button>
                                
                            </li>
                        })
                    }
                </ul>
            </section>
        </section>
    );
};
