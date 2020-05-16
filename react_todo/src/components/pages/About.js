import React from 'react'

function About() {
    return (
        // This element doesn't show up in DOM. It is just like a ghost element.
        <React.Fragment>
            <h1>About</h1>
            <p> This is the TodoList app v1.0.0. I hope you would like it.</p>
        </React.Fragment>
    )
}

export default About;