import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <section className="top-container">
      <header>
        <h1>49 Ride Challenge</h1>
      </header>
      <nav className="nav-bar">
        <h4 className="nav-link">
          <Link to="/">Home</Link>
        </h4>
        <h4 className="nav-link">
          <Link to="/scores">Scores</Link>
        </h4>
        <h4 className="nav-link">
          <Link to="/rules">Rules</Link>
        </h4>
      </nav>
    </section>
  )
}

export default HeaderNav
