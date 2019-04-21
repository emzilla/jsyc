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
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
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