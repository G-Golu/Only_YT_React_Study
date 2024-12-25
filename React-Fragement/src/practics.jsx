export const Practicses = () => {
    const students = [];
    console.log (Boolean(students.length));
    console.log (students.length);
    return (
        <>
      {/*  <p>{students.length && "No students found "}</p> */ }

{/* 1st method */}
 {/*<p>{students.length === 0 &&  "No students found "}</p>*/}

{/* 2nd method */}
 {/* <p>{!students.length  &&  "No students found "}</p>*/}

 {/* 3rd method */}
 <p>{ Boolean(!students.length) &&  "No students found "}</p>

        <p>Number of students: {students.length}</p> 
        </>
    );
};

{/*  if you can use or show this output , you should go to main.jsx and uncomment practices and import and do comment app and import app   */}