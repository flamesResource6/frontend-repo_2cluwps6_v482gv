import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-cyan-300 via-white to-purple-300 shadow-[0_0_12px_rgba(34,211,238,.35)]"
      style={{ scaleX }}
    />
  );
}
