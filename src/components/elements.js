import styled from '@emotion/styled'
import { LivePreview } from 'react-live'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    minmax(2vw, 1fr) minmax(2vw, 1fr) minmax(0, 60rem) minmax(2vw, 1fr)
    minmax(2vw, 1fr);
  width: 100%;

  > * {
    grid-column: 3 / 4;
  }
`

export const Header = styled(motion.header)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100px;
  color: #fff;
  background: linear-gradient(to right, hotpink, var(--primary));
  margin-bottom: 5rem;

  h1 {
    margin: 0;
    font-weight: 700;
  }

  p {
    font-weight: 300;
  }
`

export const ProgressBar = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  height: 20px;
  z-index: 50;
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

export const LiveContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: stretch;
  min-height: 400px;
  margin: 5rem 0;
  grid-column: 2 / 5;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--box-shadow);

  > * {
    flex: 1 1 50%;
  }
`

export const StyledPreview = styled(LivePreview)`
  box-sizing: border-box;
  background: #fff;
  color: #333;
  height: 100%;
  padding: 32px;
  background: linear-gradient(to bottom, hotpink, var(--primary));
  display: flex;
  justify-content: center;
  align-items: center;

  div,
  ul {
    width: 150px;
    height: 150px;
    border-radius: calc(30px * 1.2);
    padding: 12px;
    background-color: ${({ transparent }) =>
      transparent ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 1)'};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  ul {
    margin: 0px;
    overflow: hidden;
    padding: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 12px;
    list-style: none;
    opacity: 1;

    li {
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 100%;
      padding: 0;
    }
  }
`
