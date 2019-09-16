import React from 'react'

const HomePage = () => {
  return (
    <main>
      <section>
        <div className="timer-area">
          <h2>Timer Goes Here</h2>
        </div>
        <section className="ride-list-area">
          <div className="magic-kingdom-rides">
            <h2>Magic Kingdom</h2>
            <div className="dropdown">
              <button className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <p>Ride 1</p>
              </div>
            </div>
            <p>Rides Display Here</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default HomePage
