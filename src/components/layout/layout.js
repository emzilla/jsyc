import React from 'react'
import styled from 'styled-components'
import config from '../../../data/SiteConfig'
import { Helmet }  from 'react-helmet'
import { Header, Menu, Main, TopBanner } from '../index'

const StyledLayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    width: 940px;
`

class Layout extends React.Component {
    render() {
        const {children, pageTitle, menuData, ...theme} = this.props
        return (
            <StyledLayoutWrapper>
                <Helmet>
                    <title>{pageTitle ? `${config.siteTitle} | ${pageTitle}` : `${config.siteTitle}`}</title>
                    <meta name="description" content={config.siteDescription} />  
                </Helmet>
                <Header>
                    <Menu menuLinks={menuData} />
                </Header>
                <Main {...theme}>
                    <TopBanner />
                    {children}
                </Main>
            </StyledLayoutWrapper>
        )
    }
}
export default Layout