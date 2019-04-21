import React from "react"
import { graphql } from "gatsby"
import { 
  Layout
} from '../components/'
import "../pages/reset.css"
import "../pages/index.css"
  
class TestPageTemplate extends React.Component {
  render() {
    const currentPage = this.props.data.wordpressPage
    
    return (
      <Layout theme={currentPage.slug === "sample-page" && 'alt' } >
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <p dangerouslySetInnerHTML={{ __html: currentPage.slug }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout> 
    )
  }
}

export default TestPageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      slug
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`