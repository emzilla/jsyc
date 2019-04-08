import React from "react"
import "./reset.css"
import "./index.css"
import "./guestbook.css"

class Guestbook extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>
            <span className="visuallyhidden">Johnson Street Yacht Club Menu</span>
            <img src="../../gifs/links-wolf.gif" alt="Sparkly Wolf that says Links"/>
          </h1>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__link menu__link--active"><a href="/">Homepage</a></li>
              <li className="menu__link"><a href="/photos">Photos</a></li>
              <li className="menu__link menu__link--new"><a href="/guestbook">Guestbook</a></li>
              <li className="menu__link menu__link--updated"><a href="/cats">for the love of cats =^._.^= ∫</a></li>
              <li className="menu__link"><a href="#">Raleigh, NC</a></li>
              <li className="menu__link"><a href="#">fav LiNkS</a></li>
            </ul>
          </nav>
          <div className="contact">
            <p className="contact__address">710 W Johnson St,<br />
            Raleigh, NC 27603</p>
            <img src="../../gifs/anarchygif.gif" alt="spinning anarchy symbol"/>
            <ul className="contact__hours">
              <li>mon - closed</li>
              <li>tues - closed</li>
              <li>wed 2pm - 12am</li>
              <li>thurs - sat 12pm - 2am</li>
              <li>sun 2pm - 12am</li>
            </ul>
            <div className="contact__footer">
              <img src="../../gifs/steering-wheel.gif" alt="ship steering wheel"/>
              <img src="../../gifs/smiley-beers.gif" alt="smilies clinking beers"/>
              <img src="../../gifs/frontpage.gif" alt="made with microsoft frontpage"/>
            </div>
          </div>
          <span className="random-error">undefined</span>
        </header>
        <main className="main" role="main">
          <section className="top-banner">
            <div className="top-banner__content">
              <p>"Just a dream and the wind to carry me..."</p>
            </div>
          </section>
          <section className="guestbook">
          <h1 className="guestbook__title">Yacht Club Guestbook</h1>
          <h2 className="guestbook__subtitle">This guestbook currently has 4 entries</h2>
          <div className="guestbook__link">
            <a href="#">[sign]</a>
          </div>
          <div className="guestbook__content">
            <section className="guestbook-entry">
              <h1 className="guestbook-entry__name">Josh</h1>
              <h2 className="guestbook-entry__date">01/01/19</h2>
              <span className="guestbook-entry__comments-title">comments</span>
              <p className="guestbook-entry__comment">
                dOpE site, can’t wait to see the photos section!
              </p>
            </section>
            <section className="guestbook-entry">
              <h1 className="guestbook-entry__name">kim</h1>
              <h2 className="guestbook-entry__date">01/01/19</h2>
              <span className="guestbook-entry__comments-title">comments</span>
              <p className="guestbook-entry__comment">
                hey gurl hey this site is awesome. gotta get that music page up soon so i can get the freshest midi files.
              </p>
            </section>
            <section className="guestbook-entry">
              <h1 className="guestbook-entry__name">MICHAEL</h1>
              <h2 className="guestbook-entry__date">01/01/19</h2>
              <span className="guestbook-entry__comments-title">comments</span>
              <p className="guestbook-entry__comment">
                THIS SITE IS WIERD BUT I LIKE THE CATS PAGE.
              </p>
            </section>
            <section className="guestbook-entry">
              <h1 className="guestbook-entry__name">Emily</h1>
              <h2 className="guestbook-entry__date">01/01/19</h2>
              <span className="guestbook-entry__comments-title">comments</span>
              <p className="guestbook-entry__comment">
                emily wuz here.
              </p>
            </section>
            <section className="guestbook-footer">
            aWesOmE guestbook by <a href="https://goodfavor.co" target="_blank">Awesome Guestbooks</a>
            </section>
          </div>
          <div className="ads">
            <a href="http://bittersweetraleigh.com" target="_blank">
              <img src="../../bittersweet-fake-ad.gif" alt="Ad for Bittersweet"/>
            </a> 
          </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Guestbook