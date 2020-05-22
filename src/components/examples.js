import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { StyledPreview, LiveContainer } from './elements'
import { LiveProvider, LiveEditor, LiveError } from 'react-live'

import useReset from '../hooks/useReset'

import theme from 'prism-react-renderer/themes/vsDark'

const scope = { motion, styled }

const providerProps = {
  scope,
  theme,
}

const editorProps = {
  padding: 32,
  style: {
    fontSize: '16px',
    fontFamily: '"Dank Mono", monospace',
    borderTopLeftRadius: 'var(--radius)',
    lineHeight: 1.7,
  },
}

export const InitialAndAnimate = () => {
  const code = `
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
/>
`

  return (
    <LiveProvider code={code} {...providerProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <div>
          <StyledPreview />
        </div>
      </LiveContainer>
    </LiveProvider>
  )
}

export const HoverAndTap = () => {
  const code = `
<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ rotate: 90, scale: 1.1 }} 
  whileTap={{ borderRadius: '100%' }}
  transition={{ duration: .5 }}
/>`

  return (
    <LiveProvider code={code} {...providerProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <div>
          <StyledPreview />
        </div>
      </LiveContainer>
    </LiveProvider>
  )
}

export const Variants = () => {
  const [ResetButton, state] = useReset()

  const code = `
() => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  const item = { 
    hidden: { y: 20, opacity: 0 }, 
    visible: { y: 0, opacity: 1  } 
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3, 4].map(index => (
        <motion.li
          key={index}
          variants={item}
        />
      ))}
    </motion.ul>
  )
}
  `

  return (
    <LiveProvider code={code} {...providerProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <div>
          <ResetButton />
          {state && <StyledPreview transparent={true} />}
          {!state && <StyledPreview transparent={true} />}
        </div>
      </LiveContainer>
      <LiveError />
    </LiveProvider>
  )
}
