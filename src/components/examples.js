import React from "react";
import styled from "@emotion/styled";
import {
  motion,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { StyledPreview, LiveContainer, ProgressBar } from "./elements";
import { LiveProvider, LiveEditor, LiveError } from "react-live";

import useReset from "../hooks/useReset";

import theme from "prism-react-renderer/themes/vsDark";

const scope = {
  motion,
  styled,
  ProgressBar,
  useTransform,
  useViewportScroll,
  AnimatePresence,
};

const providerProps = {
  scope,
  theme,
};

const editorProps = {
  padding: 32,
  style: {
    fontSize: "16px",
    fontFamily: '"Dank Mono", monospace',
    borderTopLeftRadius: "var(--radius)",
    lineHeight: 1.7,
    width: "100%",
  },
};

export const InitialAndAnimate = () => {
  const [ResetButton, state] = useReset();
  const code = `
<div />
`;

  return (
    <LiveProvider code={code} {...providerProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <div>
          <ResetButton />
          {state && <StyledPreview />}
          {!state && <StyledPreview />}
        </div>
      </LiveContainer>
    </LiveProvider>
  );
};

export const HoverAndTap = () => {
  const [ResetButton, state] = useReset();

  const code = `
<motion.div 
  initial={{  }}
  animate={{  }}
/>`;

  return (
    <LiveProvider code={code} {...providerProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <div>
          <ResetButton />
          {state && <StyledPreview />}
          {!state && <StyledPreview />}
        </div>
      </LiveContainer>
    </LiveProvider>
  );
};

export const Variants = () => {
  const [ResetButton, state] = useReset();

  const code = `
() => {
  // Declare our variants


  return (
    <motion.ul
      initial={}
      animate={}
    >
      {[1, 2, 3, 4].map(index => (
        <motion.li
          key={index}
        />
      ))}
    </motion.ul>
  )
}
  `;

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
  );
};

export const Drag = () => {
  const [ResetButton, state] = useReset();

  const code = `
() => {
  return (
    <div className="drag-container">
      <motion.div 

      />
    </div>
  )
}
  `;

  return (
    <LiveProvider code={code} {...providerProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <div>
          <ResetButton />
          {state && <StyledPreview />}
          {!state && <StyledPreview />}
        </div>
      </LiveContainer>
      <LiveError />
    </LiveProvider>
  );
};

export const Scroll = () => {
  const [ResetButton, state] = useReset();

  const code = `
() => {

  return (
    <>
      <ProgressBar 
        
      />
    </>
  )
}
  `;

  return (
    <LiveProvider code={code} {...providerProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <StyledPreview style={{ width: 0, padding: 0, flex: "0 0 0" }} />
      </LiveContainer>
      <LiveError />
    </LiveProvider>
  );
};

export const Modal = () => {
  const [ResetButton, state] = useReset();

  const code = `
() => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <motion.div onClick={() => setOpen(true)} />
        {open && (
          <>
            <motion.div 
              className="backdrop" 
              initial={{  }} 
              animate={{ }}
              exit={{  }}
            >
              <motion.div 
                className="modal"
                initial={{  }}
                animate={{ }}
                exit={{  }}
                transition={{ }}
              >
                <span onClick={() => setOpen(false)}>&times;</span>
              </motion.div>
            </motion.div>
          </>
        )}
    </>
  )
}
  `;

  return (
    <LiveProvider code={code} {...providerProps}>
      <LiveContainer>
        <LiveEditor {...editorProps} />
        <div>
          <ResetButton />
          {state && <StyledPreview />}
          {!state && <StyledPreview />}
        </div>
      </LiveContainer>
      <LiveError />
    </LiveProvider>
  );
};
