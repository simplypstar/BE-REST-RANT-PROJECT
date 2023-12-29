const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>REST-Rant</title>
                {/* BOOTSTRAP CDN LINK (long) */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                {/* BOOTSTRAP Buttons */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.css"></link>
                
                {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />                 */}
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav className="navbar-nav navbar-expand-lg navbar-dark bg-primary">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/places">Places</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
                {html.children}
                <footer className="footer">Footer:  <a href="http://www.linkedin.com/in/paulita-s-a11457284" target="_blank" rel="noopener noreferrer">Paulita Starkey's LinkedIn Profile</a></footer>
            </body>

        </html>
    )
  }
  
  module.exports = Def