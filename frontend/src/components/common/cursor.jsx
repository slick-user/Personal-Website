import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

const CursorGlow = ({ defaultImage, hoverImage }) => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  //Rotation effect based on horizontal velocity
  const rotateZ = useTransform(mouseX, (latest) => {
    const velocity = mouseX.getVelocity();
    return velocity / 50; // Tilts the image slightly when moving fast
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect if the mouse is over a selectable element
    const handleMouseOver = (e) => {
      const target = e.target;
      const isSelectable = 
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isSelectable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Glow Layer */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(800px at ${smoothX}px ${smoothY}px, rgba(250, 92, 92, ${isHovering ? 0.2 : 0.1}), transparent 80%)`,
        }}
      />

      {/* Image Layer */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50"
        style={{
          x: smoothX,
          y: smoothY,
          rotate: rotateZ,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? "64px" : "48px", // Image grows slightly on hover
          height: isHovering ? "64px" : "48px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img 
          src={isHovering ? hoverImage : defaultImage} 
          alt="cursor"
          className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(250,92,92,0.8)] transition-all duration-300"
        />
      </motion.div>
    </>
  );
};

export default CursorGlow;
