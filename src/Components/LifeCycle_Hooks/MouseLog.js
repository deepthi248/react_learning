
import React, { useState, useEffect } from 'react'
function MouseLog() {
    const [X, setX] = useState()
    const [Y, setY] = useState()

    const logMouseMovement = (event) => {
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(() => {
        window.addEventListener('mousemove', logMouseMovement);

        return () => {
            window.removeEventListener('mousemove', logMouseMovement)
        }
    })
    return (
        <div>
            <p>Mouse is at X {X} and Y  {Y}</p>
        </div>
    )
}

export default MouseLog
