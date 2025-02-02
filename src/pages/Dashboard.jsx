import React, { useState } from 'react';
import {dummyPosts} from '../data';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = useState(dummyPosts)
  return (
    <section className="dashboard">
      {
        posts.length ? <div className="container dashboard_container">
          {
            posts.map(post => {
              return <article key={post.id} className='dashboard_post'>
                <div className="dashboard_post-info">
                 <div className="dashboard-post-thumbnail">
                  <img src={post.thumbnail} alt="" />
                 </div> 
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${post.id}`} className='btn sm'>View</Link>
                  <Link to={`/posts/${post.id}/edit`} className='btn sm primary'>Edit</Link>
                  <Link to={`/posts/${post.id}`} className='btn sm danger'>Delete</Link>
                </div>
              </article>
            })
          }
        </div>
        : <h2 className='center'>You have no posts yet</h2>
      }
    </section>
  )
}

export default Dashboard
