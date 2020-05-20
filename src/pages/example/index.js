import React, { useState, useCallback, useMemo } from 'react'
import { Button, ClickableTile } from 'carbon-components-react'
import { motion } from 'framer-motion'
import { durations, productive } from '../../utils/animationHelpers'

// import 'carbon-components/css/carbon-components.min.css'
// import '../../styles/examples.css'

const Example = () => {
  const [open, setOpen] = useState(false)

  const openSidebar = useCallback(() => setOpen(true), [setOpen])
  const closeSidebar = useCallback(() => setOpen(false), [setOpen])

  const entranceTransition = useMemo(
    () => ({
      duration: durations.moderate1,
      ease: productive.entrance,
    }),
    []
  )

  const exitTransition = useMemo(
    () => ({
      duration: durations.fast2,
      ease: productive.exit,
    }),
    []
  )

  return (
    <div>
      <header></header>
      <main className="container">
        <motion.div
          variants={{
            show: {
              width: '45vw',
              opacity: 1,
              transition: entranceTransition,
            },
            hide: {
              width: 0,
              opacity: 0,
              transition: exitTransition,
            },
          }}
          style={{ overflow: 'hidden' }}
          initial={false}
          animate={open ? 'hide' : 'show'}
          className="splash-panel"
        >
          <div style={{ padding: '100px 60px' }}>
            <h1>Framer motion, in motion 🚀</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quam repudiandae laboriosam ea non aspernatur, mollitia, natus
              est, veritatis placeat cupiditate eligendi corrupti ullam eos
              quasi quod ipsum unde dolores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aspernatur delectus tempora non
              consequuntur qui earum impedit, atque, cupiditate distinctio enim
              est provident veniam voluptatibus voluptates rem, nihil hic nam
              commodi!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              neque aperiam labore officiis iste numquam hic, facere quidem
              inventore, aut quas repudiandae? Earum sapiente natus esse
              architecto soluta, quos eius.
            </p>
          </div>
        </motion.div>
        <motion.div className="layout-container">
          <motion.div transition={{ staggerChildren: 0.2 }} className="cards">
            {[...new Array(18).fill(null)].map(() => (
              <ClickableTile handleClick={openSidebar} className="card">
                <div className="card__icon"></div>
                <p className="card__content"></p>
                <h3 className="card__title"></h3>
              </ClickableTile>
            ))}
          </motion.div>
        </motion.div>
        <motion.aside
          variants={{
            show: {
              width: '45vw',
              transition: entranceTransition,
              overflow: 'auto',
              transition: { delayChildren: 0.3 },
            },
            hide: {
              width: 0,
              transition: exitTransition,
              overflow: 'hidden',
              transition: { delayChildren: 0.3 },
            },
          }}
          initial={false}
          animate={open ? 'show' : 'hide'}
          className="sidebar"
        >
          <motion.div
            variants={{
              show: { height: 400 },
              hide: { height: 100 },
            }}
            className="top"
          >
            top part
          </motion.div>
          <motion.div
            variants={{
              show: { opacity: 1, transition: { delay: 0.5 } },
              hide: { opacity: 0 },
            }}
            className="bottom"
          >
            <h2>The sidebar is open</h2>
            <Button onClick={closeSidebar} kind="primary">
              Close it
            </Button>
          </motion.div>
        </motion.aside>
      </main>
    </div>
  )
}

export default Example
