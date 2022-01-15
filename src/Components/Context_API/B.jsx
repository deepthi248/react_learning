import React, { Component } from 'react'
import { UserContext } from './UserContext'

export class B extends Component {

    static contextType = UserContext
    render() {
        console.log(this.context)
        return (
            <div>
                <p>{this.context}is in component B</p>
            </div>
        )
    }
}
// B.contextType = UserContext
export default B

