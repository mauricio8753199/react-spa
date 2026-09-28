import React from "react";

function Counter({valor = 0}) {
    return (
        <div>
            <p>{valor}</p>
        </div>
    )
}

export default Counter;