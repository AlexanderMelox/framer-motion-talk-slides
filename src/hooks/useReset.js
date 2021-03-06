import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.14);
  position: absolute;
  top: 20px;
  right: 20px;
  width: auto;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 7px;
  border-radius: 10px;
  padding: 10px 11px;
  cursor: pointer;
`

const useReset = () => {
  const [state, forceRender] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const onMouseEnter = useCallback(() => setIsHovering(true), [])
  const onMouseLeave = useCallback(() => setIsHovering(false), [])
  const update = useCallback(() => forceRender(s => !s), [forceRender])

  const ResetButton = React.memo(() => (
    <Button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={update}
    >
      <motion.svg
        animate={{ rotate: isHovering ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8 5.1541V2.5a.7.7 0 0 1 1.4 0v5a.7.7 0 0 1-.7.7h-5a.7.7 0 0 1 0-1.4h3.573c-.7005-1.8367-2.4886-3.1-4.5308-3.1C4.8665 3.7 2.7 5.85 2.7 8.5s2.1665 4.8 4.8422 4.8c1.3035 0 2.523-.512 3.426-1.4079a.7.7 0 0 1 .986.9938C10.7915 14.0396 9.2186 14.7 7.5422 14.7 4.0957 14.7 1.3 11.9257 1.3 8.5s2.7957-6.2 6.2422-6.2c2.1801 0 4.137 1.1192 5.2578 2.8541z"
          fill="#fff"
          fill-rule="nonzero"
        ></path>
      </motion.svg>
    </Button>
  ))

  return [ResetButton, state]
}

export default useReset
