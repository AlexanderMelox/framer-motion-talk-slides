import React from 'react'
import { Global, css } from '@emotion/core'
import { normalize } from 'polished'
import { Header, Container, Link } from './elements'
import Footer from './footer'
import SEO from './seo'

const globalStyles = css`
  ${normalize()};

  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap');
  @import url('https://highlightjs.org/static/demo/styles/railscasts.css');

  @font-face {
    font-family: 'Dank Mono';
    src: url('../fonts/DankMono-Regular.otf');
  }

  :root {
    --bg: #26262b;
    --ui-bg: #36393f;
    --text-01: #fff;
    --text-02: hsla(0, 0%, 100%, 0.6);
    --primary: #7289da;
    --secondary: #fff;
    --box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    --radius: 5px;
  }

  body {
    background: var(--bg);
    font-family: 'Nunito Sans', sans-serif;
    color: var(--text-02);
  }

  strong {
    color: var(--text-01);
    font-weight: bold;
    font-size: 1.25rem;
  }

  code {
    font-family: 'Dank Mono', monospace;
    padding: 2rem !important;
    border-radius: var(--radius);
    box-shadow: var(--box-shadow);
    border-left: 5px solid var(--primary);
    background: var(--ui-bg) !important;
  }

  h1,
  h2,
  h3 {
    color: var(--text-01);
    font-weight: 400;
  }

  h1 {
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.6;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Global styles={globalStyles} />
      <Header>
        <Container>
          <h1>🚄 Framer motion</h1>
        </Container>
      </Header>
      <Container>
        <div>{children}</div>
      </Container>
      <Footer>
        <p> Made with ❤️ with GatsbyJS</p>
        <span>
          Developed by{' '}
          <Link href="https://alexandermelox.netlify.com">Alexander Melo</Link>
        </span>
      </Footer>
    </>
  )
}

export default Layout
