import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Main = styled.div`
  width: 67.5%;
  margin: 0 auto;
`

const IndexPage = () => (
  <Main>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Main>
)

export default IndexPage
