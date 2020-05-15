import styled from '@emotion/styled'
import { Link } from './elements'

const Footer = styled.footer`
  background: #000;
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
  padding: 3rem 0;
  margin-top: 3rem;

  p {
    margin: 0;
    font-weight: bold;
  }

  span {
    color: var(--text-02);
    font-weight: lighter;
    font-size: 1rem;
  }

  ${Link} {
    font-size: 1rem;
  }
`

export default Footer
