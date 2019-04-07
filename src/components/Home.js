import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
            <h2>This is Home Page powered by {props.name}</h2>
            <Link to="/posts/1">Post 1</Link>
            <Link to="/posts/2">Post 2</Link>
            <Link to="/posts/3">Post 3</Link>
            
        </div>
    )
}

export default Home;