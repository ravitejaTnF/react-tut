import React from 'react';

// function Greet(){
//     return <h1>Hello Windows</h1>;
// }

const Greet = (props) => {
    return <h1>Functional component : hello {props.name} {props.surName}</h1>
}

export default Greet;