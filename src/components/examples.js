import React from 'react'
import { StyledPreview, LiveContainer } from './elements'
import { LiveProvider, LiveEditor, LiveError } from 'react-live'
import { css } from '@emotion/core'
import { motion } from 'framer-motion'

import theme from 'prism-react-renderer/themes/vsDark'

const scope = { motion }

const prodviderProps = {
  scope,
  theme,
}

const editorProps = {
  padding: 32,
  style: {
    fontSize: '16px',
    fontFamily: '"Dank Mono", monospace',
    borderTopLeftRadius: 'var(--radius)',
  },
}

export const One = () => {
  return (
    <LiveProvider code="<div>Hello World!</div>" {...prodviderProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <div>
          <LiveError />
          <StyledPreview />
        </div>
      </LiveContainer>
    </LiveProvider>
  )
}
