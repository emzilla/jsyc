import React from 'react'
import styled from 'styled-components'
import { Header, Menu, Main, TopBanner } from '../index'

const StyledLayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    width: 940px;
`

class Layout extends React.Component {
    render() {
        const {children, ...theme} = this.props
        return (
            <StyledLayoutWrapper>
                <Header>
                    <Menu links={[
                        { path: '/', name: 'Homepage', },
                        { path: '/photos', name: 'Photos', },
                        { path: '/guestbook', name: 'Guestbook', },
                        { path: '/cats', name: 'for the love of cats =^._.^= ∫', },
                      ]} />
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