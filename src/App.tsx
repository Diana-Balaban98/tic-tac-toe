import React, {useState} from 'react';
import {Square} from "./components/Square";


export const App = () => {
    const [squares, setSquares] = useState<string[]>(["", "", "", "", "", "", "", "", ""])
    const [winMessage, setWinMessage] = useState<string>("")
    const [go, setGo] = useState<string>("circle")

    const message = `it's now ${go}'s go!`


    const cells = squares.map((cell, index) =>
        <Square
            key={index}
            id={index}
            cell={cell}
            setSquares={setSquares}
            go={go}
        />);

    return <div className="wrapper-app">
        <div className="gameBoard">
            {cells}
        </div>
        <div className="message">{message}</div>
    </div>;
}


