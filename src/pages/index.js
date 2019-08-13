import React from "react"
import { 
  Layout
} from '../components/'
import { graphql } from "gatsby"
import "./reset.css"
import "./index.css"

class Index extends React.Component {
  render() {
    const allPages = this.props.data.allWordpressPage.edges
    
    const homePageData = allPages.filter(page => page.node.slug === "home")[0].node

    const menuData = this.props.data.allWordpressWpApiMenusMenusItems.edges[0].node.items

    const acfFields = homePageData.acf

    return (
      <Layout menuData={menuData}>
        <section className="homepage-intro">
          <div className="homepage-intro__banner">
            <h1>
            <span className="visuallyhidden">Welcome</span>
            <img src="../../gifs/welcome.gif" alt="Welcome"/>
            </h1>
          </div>
          {!!acfFields.homepage_marquee &&
            (
              <div className="homepage-intro__marquee">
                <span dangerouslySetInnerHTML={{__html: acfFields.homepage_marquee}} className="homepage-intro__marquee-content"/>
                <span dangerouslySetInnerHTML={{__html: acfFields.homepage_marquee}} className="homepage-intro__marquee-content"/>
              </div>
            )
          }
        </section>
        <section className="homepage-content">
          <div className="homepage-content__title">
            <h1 dangerouslySetInnerHTML={{ __html: homePageData.title }} className="visuallyhidden" />
            <img src="../../gifs/shark.gif" alt="shark swimming"/>
            <img src="../../johnson-street-yacht-club-logo-shittly-photoshopped.png" alt="Johnson Street Yacht Club Logo"/>
            <img src="../../gifs/anchor-spin.gif" alt="spinning anchor"/>
          </div>
          <div dangerouslySetInnerHTML={{ __html: homePageData.content }} className="homepage-content__text" />
        </section>
        {!!acfFields.homepage_featured_quote &&
          <section className="featured-quote">
            <img src="../../gifs/beer-banner.gif" alt="beer sliding across screen"/>
              <div className="featured-quote__quote">
                <div className="featured-quote__images">
                  <img src="../../gifs/sailboat-sailing.gif" alt="sailboat"/>
                  <img src="../../gifs/dancing-baby.gif" alt="dancing baby from Ally McBeal"/>
                </div>        
                <blockquote className="featured-quote__text">
                  <span dangerouslySetInnerHTML={{__html: acfFields.homepage_featured_quote}} />
                  <br />
                  <span dangerouslySetInnerHTML={{__html: acfFields.homepage_featured_quote_author}} className="featured-quote__text--author" />
                </blockquote>
              </div>
          </section>
        }
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
          <a href="/guestbook" className="guestbook-feature__link">
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
      </Layout>
    )
  }
}

export default Index

export const indexQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          slug
          title
          content
          acf {
            homepage_marquee
            homepage_featured_quote
            homepage_featured_quote_author
          }
        }
      }
    }
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          items {
            title
            object_slug
            object_id
            url
          }
        }
      }
    }
  }
`