import React, { useState } from 'react';

import Avatar4 from '../images/avatar4.jpg';
import Avatar5 from '../images/avatar5.jpg';
import Avatar6 from '../images/avatar6.jpg';
import Avatar7 from '../images/avatar7.jpg';
import Avatar8 from '../images/avatar8.jpg';
import { Link } from 'react-router-dom';


const authorsData = [
  { id: 1, avatar: Avatar4, name: "John Smith", posts: 3 },
  { id: 2, avatar: Avatar5, name: "Emily Johnson", posts: 5 },
  { id: 3, avatar: Avatar6, name: "Michael Smith", posts: 2 },
  { id: 4, avatar: Avatar7, name: "Sophia Brown", posts: 4 },
  { id: 5, avatar: Avatar8, name: "Liam Davis", posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors-container">
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link to={`/posts/users/${id}`} className='author'>
              <div className="author-avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          }
        ) 
        }
      </div> :
      <h2 className='center'> No authors found</h2>}
    </section>
  )
}

export default Authors
