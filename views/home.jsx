const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <center><div className="container-sm">
                <img src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Two Fruit Beverages on Glass Cups" />
                
                  <div className="form-b">Photo by <a href="AUTHOR_LINK"> Brenda Godinez </a> on <a href="UNSPLASH_LINK"> Unsplash </a>
                  </div>
                
                <p></p>
                <a href="/places">
                  <button className="btn btn-primary">Places Page</button>
                </a>
              </div></center>
          </main>
      </Def>
    )
  }

  module.exports = home