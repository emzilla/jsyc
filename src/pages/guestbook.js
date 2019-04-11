import React from "react"
import { 
  Layout
} from '../components/'
import "./reset.css"
import "./index.css"
import "./guestbook.css"


class Guestbook extends React.Component {
  render() {
    return (
      <Layout theme={'alt'}>
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
      </Layout>
    )
  }
}

export default Guestbook