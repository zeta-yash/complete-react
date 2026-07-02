import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="card">
        <div className="top">
          <div className="logo">
            <img src="https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height={"50vh"}/>
          </div>
        </div>
        <div className="center">
          <h1>Yash Gupta</h1>
        </div>
        <div className="bottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, praesentium.</p>
          <button className="btn">View</button>
        </div>
      </div>
    </div>
  )
}

export default Card