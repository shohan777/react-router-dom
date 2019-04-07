import React from 'react';
import { Link } from 'react-router-dom'

const Posts = ({match}) => {
    
    return(
        <div>
            <h2>The post is {match.params.postId} </h2>
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
    )
}

export default Posts;