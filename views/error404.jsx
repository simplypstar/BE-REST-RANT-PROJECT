const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
          <p></p>
          <h1>404: Page Not Found</h1>
          <h2>Oops, sorry, we can't find this page!</h2>
          <p></p>
          <center><div>
              <img src="/images/peacock-unsplash.jpeg" alt="Photo of Blue and Green Peacock" width="400" height="400" />
          </div>
          <div>Photo by <a href="AUTHOR_LINK">Ricardo Frantz</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div></center>
          <p></p>
            
          </main>
      </Def>
    )
  }
  


module.exports = error404
