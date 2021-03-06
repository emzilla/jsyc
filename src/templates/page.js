import React from "react"
import { graphql } from "gatsby"
import { 
  Layout
} from '../components/'
import "../pages/reset.css"
import "../pages/index.css"
import "../pages/cats.css"
import "../pages/photos.css"
  
class PageTemplate extends React.Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    const menuData = this.props.data.allWordpressWpApiMenusMenusItems.edges[0].node.items

    const chosenAds = (!!this.props.data.wordpressPage.acf && !!this.props.data.wordpressPage.acf.ads) && this.props.data.wordpressPage.acf.ads[0]
    
    return (
      <Layout menuData={menuData} theme={currentPage.slug === 'photos' ? 'alt' : currentPage.slug ===  'cats' ? 'cats' : undefined }>
        <span className="visuallyhidden">
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </span>
        {currentPage.slug === 'cats' ?
          <section className="cats">
            <div className="cats__title">
              <img src="../../gifs/cats-title.gif" alt="Sweet Cats"/>
            </div>
            <div className="cats__grid" dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          </section>
          : currentPage.slug === 'photos' ?
          <section className="photos">
            <h2 className="photos__title" >Photos coming soon...</h2>
            <div className="photos__under-construction" dangerouslySetInnerHTML={{ __html: currentPage.content }}>
            </div>
          </section>
          :
          <p>We're sorry, this page does not exist.</p>
        }

        {!!chosenAds && (
          <div className="ads">
            {chosenAds === "Bittersweet" ?
            (<a href="http://bittersweetraleigh.com" target="_blank">
              <img src="../../bittersweet-fake-ad.gif" alt="Ad for Bittersweet"/>
            </a>)
            : chosenAds === "One Raleigh" ?
              (<a href="http://oneraleigh.co" target="_blank">
                <img src="../../one-raleigh-fake-ad.gif" alt="Ad for One Raleigh website"/>
              </a>)
              : chosenAds === "Raleigh Provisions" ?
              (<a href="http://raleighprovisions.com" target="_blank">
                <img src="../../rp-fake-ad.gif" alt="Ad for Raleigh Provisions website"/>
              </a>) 
              : 
              (<a href="http://raleighprovisions.com" target="_blank">
                <img src="../../rp-fake-ad.gif" alt="Ad for Raleigh Provisions website"/>
              </a>)
          }
          </div>
        )}
       
      </Layout> 
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      slug
      acf {
        ads
      }
    }
    site {
      id
      siteMetadata {
        title
        subtitle
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