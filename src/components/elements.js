import styled from '@emotion/styled'
import { LivePreview } from 'react-live'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(4vw, 1fr) minmax(0, 60rem) minmax(4vw, 1fr);

  > * {
    grid-column: 2 / 3;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  color: #fff;
  background: var(--ui-bg);

  h1 {
    margin: 0;
    font-weight: 700;
  }

  p {
    font-weight: 300;
  }
`

const Button = styled.button`
  border-radius: var(--radius);
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  cursor: pointer;
  border: none;
`

export const PrimaryBtn = styled(Button)`
  background: var(--primary);
  color: var(--text-01);
`

export const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  padding-bottom: 3px;
  border-bottom: 2px solid var(--primary);
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  transition: all 0.3s;

  &:link,
  &:visited {
    color: var(--text-01);
    opacity: 0.8;
  }

  &:hover,
  &:active {
    opacity: 1;
    transform: translateY(-3px);
  }
`

export const Window = styled.div`
  background: var(--primary);
  position: relative;

  height: 472px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: var(--box-shadow);

  div {
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 35px;
    cursor: pointer;
  }
`

export const Reset = styled(motion.span)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 38px;
  height: 36px;
  background: rgba(255, 255, 255, 0.14);
  box-shadow: var(--box-shadow);
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 7px 0px;
`

export const GiveMeSomeSpace = styled.div`
  height: 4rem;
`

export const LiveContainer = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 400px;

  > * {
    flex: 1 1 50%;
  }
`

export const StyledPreview = styled(LivePreview)`
  background: #fff;
  color: #333;
  height: 100%;
`
