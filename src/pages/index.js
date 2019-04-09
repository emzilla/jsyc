import React from "react"
import "./reset.css"
import "./index.css"
import { 
  Layout
} from '../components/'

class Index extends React.Component {
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
          <section className="homepage-intro">
            <div className="homepage-intro__banner">
              <h1>
              <span className="visuallyhidden">Welcome</span>
              <img src="../../gifs/welcome.gif" alt="Welcome"/>
              </h1>
            </div>
            <div className="homepage-intro__marquee">
              <span className="homepage-intro__marquee-content">Drink special every Wednesday: Pirate's Booty</span>
              <span className="homepage-intro__marquee-content">Drink special every Wednesday: Pirate's Booty</span>
            </div>
          </section>
          <section className="homepage-content">
            <div className="homepage-content__title">
              <h1 className="visuallyhidden">Johnson Street Yacht Club</h1>
              <img src="../../gifs/shark.gif" alt="shark swimming"/>
              <img src="../../johnson-street-yacht-club-logo-shittly-photoshopped.png" alt="Johnson Street Yacht Club Logo"/>
              <img src="../../gifs/anchor-spin.gif" alt="spinning anchor"/>
            </div>
            <div className="homepage-content__text">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ullam sapiente praesentium facilis, rem eius neque, cupiditate iure consectetur animi, odit dolores deserunt facere assumenda ad blanditiis dicta? Ea, molestiae.</p>
            </div>
          </section>
          <section className="featured-quote">
            <img src="../../gifs/beer-banner.gif" alt="beer sliding across screen"/>
              <div className="featured-quote__quote">
                <div className="featured-quote__images">
                  <img src="../../gifs/sailboat-sailing.gif" alt="sailboat"/>
                  <img src="../../gifs/dancing-baby.gif" alt="dancing baby from Ally McBeal"/>
                </div>
                <blockquote className="featured-quote__text">We are the people our parents warned us about<br /><span className="featured-quote__text--author">- Jimmy Buffet</span></blockquote>
              </div>
          </section>
          <section className="contact-block">
            <div className="contact-block__banner contact-block__banner--top">
              <img src="../../gifs/sharkfin-banner.gif" alt="shark swimming across screen"/>
            </div>
            <div className="contact-block__banner contact-block__banner--bottom">
              <img src="../../gifs/betterthanmilk.gif" alt="Milk Sucks... Drink Beer gif"/>
              <img src="../../gifs/built-with-beer.gif" alt="Site made by beer"/>
            </div>
            <div className="contact-block__details">
              <h1 className="contact-block__title">Contact Us!</h1>
              <ul className="contact-block__list">
                <li>
                  <h2>
                    <span className="visuallyhidden">Phone Number</span>
                    <img src="../../gifs/cellphone.gif" alt="Phone"/>
                  </h2>
                  <p>919-867-5309</p>
                </li>
                <li>
                  <h2>
                    <span className="visuallyhidden">Address</span>
                    <img src="../../gifs/small-anchor.gif" alt="Small Anchor"/>
                  </h2>
                  <p>710 W Johnson St,<br />
                  Raleigh, NC 27603</p>
                </li>
                <li>
                  <h2>
                    <span className="visuallyhidden">Email</span>
                    <img src="../../gifs/email-spin.gif" alt="Email"/>
                  </h2>
                  <p>jsyachtclub@hotmail.com</p>
                </li>
              </ul>
            </div>
          </section>
          <section className="guestbook-feature">
            <h1 className="guestbook-feature__title"><span className="visuallyhidden">Yacht Club's</span> <img src="../../gifs/yacht-clubs.gif" alt="Yacht Club's"/> <br />gUEstbOOk</h1>
            <h2 className="guestbook-feature__subtitle">*~ -.. FRIENDS ONLY ..- ~*</h2>
            <a href="#" className="guestbook-feature__link">
              <span className="visuallyhidden">Click Here</span>
              <img src="../../gifs/click-here.gif" alt="Click Here gif"/>
            </a>
            <div className="guestbook-feature__counter">
              <img src="../../gifs/evil-counter.gif" alt="Hit counter"/>
            </div>
            <div className="guestbook-feature__bar">
              <img src="../../gifs/rainbow-bar.gif" alt="Rainbow line break gif"/>
            </div>
            <div className="guestbook-feature__footer">
              <img src="../../gifs/paradise-sailboat.gif" alt="Circle with sailboat and sun that says Paradise"/>
              <img src="../../gifs/britney.gif" alt="Britney Spears dancing"/>
              <img src="../../broken-image.jpg" alt="Fake broken image link"/>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Index