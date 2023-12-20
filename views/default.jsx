const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>REST-Rant</title>
                {/* BOOTSTRAP CDN LINK (long) */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />                
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
                <footer className="footer">Footer:  <a href="http://www.linkedin.com/in/paulita-s-a11457284" target="_blank" rel="noopener noreferrer">Paulita Starkey's LinkedIn Profile</a></footer>
            </body>

        </html>
    )
  }
  
  module.exports = Def