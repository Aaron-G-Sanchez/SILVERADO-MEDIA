import { motion, useScroll } from 'framer-motion'

const ScrollMeter = () => {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.section
        className="progress"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}

export default ScrollMeter
