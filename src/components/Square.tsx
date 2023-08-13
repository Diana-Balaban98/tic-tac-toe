import React, {FC, MouseEvent} from "react";

type SquarePropType = {
    id: number
    cell: string
    setSquares: (cells: string[]) => void
    go: string
}

export const Square:FC<SquarePropType> = ({id, cell, setSquares, go}) => {
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const taken = e.currentTarget.classList.contains("circle") ||
            e.currentTarget.classList.contains("cross")

        if (!taken) {
            if (go === "circle") {
                e.currentTarget.classList.add('circle')
            } else {
                e.currentTarget.classList.add('cross')
            }
        }
    }

    return <div id={String(id)} className='square' onClick={handleClick}>{cell}
        <div className={cell}></div>
    </div>
}