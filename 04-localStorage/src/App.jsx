import React from 'react'
import { useState, useEffect } from 'react'



const App = () => {
  const [content, setcontent] = useState('Test');

  useEffect(() => {
    const user2det = {
      name: 'Yash',
      age: 20,
      city: 'Delhi'
    }

    localStorage.setItem("user", "Yash")
    localStorage.setItem("pass", "root")

    const user = localStorage.getItem("user")
    console.log(user);

    // localStorage.removeItem("user")
    localStorage.setItem('user2', JSON.stringify(user2det))
    const getuser = JSON.parse(localStorage.getItem('user2'));
    console.log(getuser);


  }, []);
  const handleChange = () => {
    setcontent('Changed');}


    // localStorage.clear()
    return (

      // {/* User is : {localStorage.getItem('user')} <br />
      //   Password is : {localStorage.getItem('pass')} */}
      < div >
        <p >{content} is </p>
        <p>Hi</p>
        <button onClick={handleChange}>Change</button>
      </div >
    )
  }

  export default App