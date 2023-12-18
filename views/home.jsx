const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Two Fruit Beverages on Glass Cups" width="500" height="400" />
              </div>
              <div>Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
              </div>
              <p></p>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

  module.exports = home