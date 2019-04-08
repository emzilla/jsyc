import React from "react"
import "./reset.css"
import "./index.css"
import "./cats.css"

class Cats extends React.Component {
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
          <section className="cats">
            <h1 className="cats__title" >
              <span className="visuallyhidden">Sweet Cats</span>
              <img src="../../gifs/cats-title.gif" alt=""/>
            </h1>
            <div className="cats__grid">
              <img src="../../gifs/cats-welcome.gif" alt=""/>
              <img src="../../gifs/cats-angels.gif" alt=""/>
              <img src="../../gifs/cats-wiggle-tail.gif" alt=""/>
              <img src="../../gifs/cats-potato-chip-banner.gif" alt=""/>
              <img src="../../gifs/cats-walking-cat.gif" alt=""/>
              <img src="../../gifs/cats-blessed-by-cats.gif" alt=""/>
              <img src="../../gifs/cats-coffee.gif" alt=""/>
              <img src="../../gifs/cats-kristis-corner.gif" alt=""/>
            </div>
            <div className="ads">
              <a href="http://oneraleigh.co" target="_blank">
                <img src="../../one-raleigh-fake-ad.gif" alt="Ad for One Raleigh website"/>
              </a>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Cats