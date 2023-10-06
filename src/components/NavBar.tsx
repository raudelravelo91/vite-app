import { useState } from "react";

interface Props{
    count: number;
}

function NavBar({count}: Props){

    return( 
        <div style={{ border: '2px solid black', padding: '5px', display: 'inline-block', margin: '2px'}}>
            <h3>Count: {count}</h3>
        </div>
    );
}

export default NavBar;