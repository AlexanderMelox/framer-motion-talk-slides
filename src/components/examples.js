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
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
/>
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
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ rotate: 90, scale: 1.5 }} 
  whileTap={{ borderRadius: '100%', scale: .8 }}
  transition={{ duration: .3 }}
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
  const contraintsRef = React.useRef(null);

  return (
    <div ref={contraintsRef} className="drag-container">
      <motion.div 
        drag="x" 
        dragConstraints={contraintsRef}
        dragElastic={0.1} 
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
  const { scrollYProgress } = useViewportScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0px", "100%"]);

  return (
    <>
      <ProgressBar 
        style={{ width }} 
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

  const backdropVariants = {
    hidden: { opacity: 0, transition: { when: 'afterChildren' } },
    visible: { opacity: 1, transition: { when: 'beforeChildren' } },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
    leave: { y: 200, opacity: 0 }
  }

  return (
    <>
      <motion.div onClick={() => setOpen(true)} />
      <AnimatePresence>
        {open && (
          <>
            <motion.div 
              className="backdrop" 
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div 
                className="modal"
                variants={modalVariants}
                exit="leave"
              >
                <span onClick={() => setOpen(false)}>&times;</span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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
