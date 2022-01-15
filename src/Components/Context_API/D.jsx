import React from 'react'
import { Consumer } from './UserContext'

function D() {
    return (
        <div>
            <Consumer>
                {
                    //message is context value
                    message => {
                        console.log(message)
                        return (<p>{message}</p>)


                    }
                }
            </Consumer>
        </div>
    )
}

export default D
