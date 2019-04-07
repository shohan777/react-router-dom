import React from 'react';
let arr = [2, 34, 53, 12, 221];
let newarr = [...arr, 3333434]
console.log(arr);
const About = () => {
    return(
        <div>
            <h2>This is About Page</h2>
            Show: { [arr] }
        </div>
    )
}

export default About;