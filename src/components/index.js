import React from 'react'
// import theme from './theme'

import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    height: 100%;
  }
`

export Layout from './layout/layout';