import React from "react"
import { 
  Layout
} from '../components/'
import "./reset.css"
import "./index.css"
import "./photos.css"

class Photos extends React.Component {
  render() {
    return (
      <Layout theme={'alt'} pageTitle="Photos">
        <section className="photos">
          <h1 className="photos__title" >Photos coming soon...</h1>
          <div className="photos__under-construction">
            <div className="photos__grid">
              <img src="../../gifs/construction-worker.gif" alt="Construction worker digging into ground"/>
              <img src="../../gifs/caution.gif" alt="Blinking caution sign"/>
            </div>
            <img src="../../gifs/under-construction-bar.gif" alt="Under construction bar"/>
            <img src="../../gifs/gone-sailing.gif" alt="Gone Sailing"/>
          </div>
          <div className="ads">
            <a href="http://oneraleigh.co" target="_blank">
              <img src="../../one-raleigh-fake-ad.gif" alt="Ad for One Raleigh website"/>
            </a>
            <a href="http://raleighprovisions.com" target="_blank">
              <img src="../../rp-fake-ad.gif" alt="Raleigh Provisions Ad"/>
            </a>  
          </div>
        </section>
      </Layout>
    )
  }
}

export default Photos