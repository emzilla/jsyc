import React from "react"
import Helmet from "react-helmet"

class MainLayout extends React.Component {
    render() {
        const { children } = this.props
        return (
          <div>
            <Helmet>
              <title>Test</title>
              <meta name="description" content="Testing Descirption" />
            </Helmet>
            hello
            {children()}
          </div>
        )
      }
}

export default MainLayout