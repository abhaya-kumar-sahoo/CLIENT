import React from 'react'
import {NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Error() {
  return (
    <div>
    <h1>404</h1>
      <h1>Page is Not Available </h1>

      <NavLink to="/">GO BACK TO HOME</NavLink>
    </div>
  )
}

export default Error
