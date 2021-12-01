import React from "react";
import { Link } from "react-router-dom";
import Button from "reactstrap/lib/Button";
function About() {
  return (
  <>
  <Button color='secondary' ><Link exact to="/">Home</Link></Button>
    
    <Button color='secondary' className='ml-2'><Link exact to="/About">About</Link></Button>
  <h1>About</h1>
        <p>Jenifer Putri Sambul (105011810074), Sistem Informasi</p>
  </>
  )
}

export default About;
