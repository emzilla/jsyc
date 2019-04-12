import React from "react"
import { 
  Layout
} from '../components/'
import "./reset.css"
import "./index.css"
import "./cats.css"

class Cats extends React.Component {
  render() {
    return (
      <Layout theme={"cats"} pageTitle="Cats">
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
      </Layout>
    )
  }
}

export default Cats