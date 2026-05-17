import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FloatingShapesProps {
  variant?: "default" | "sparse" | "dense";
}

const FloatingShapes = ({ variant = "default" }: FloatingShapesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const shapes = [
    // Stars - different parallax speeds
    { type: "star", size: 24, x: "10%", y: "20%", delay: 0, color: "cyan", speed: 0.3 },
    { type: "star", size: 18, x: "85%", y: "30%", delay: 1.5, color: "pink", speed: 0.5 },
    { type: "star", size: 20, x: "75%", y: "70%", delay: 3, color: "amber", speed: 0.2 },
    // Triangles
    { type: "triangle", size: 28, x: "20%", y: "75%", delay: 0.8, color: "secondary", speed: 0.4 },
    { type: "triangle", size: 22, x: "90%", y: "55%", delay: 2.2, color: "cyan", speed: 0.6 },
    // Circles
    { type: "circle", size: 18, x: "5%", y: "50%", delay: 1.2, color: "amber", speed: 0.35 },
    { type: "circle", size: 26, x: "95%", y: "15%", delay: 2.8, color: "pink", speed: 0.45 },
  ];

  const sparseShapes = shapes.slice(0, 4);
  const denseShapes = [...shapes, 
    { type: "star", size: 14, x: "40%", y: "85%", delay: 4, color: "cyan", speed: 0.25 },
    { type: "circle", size: 20, x: "60%", y: "10%", delay: 3.5, color: "secondary", speed: 0.55 },
  ];

  const activeShapes = variant === "sparse" ? sparseShapes : variant === "dense" ? denseShapes : shapes;

  const getColorClass = (color: string) => {
    switch (color) {
      case "cyan": return "text-cyan";
      case "pink": return "text-pink";
      case "amber": return "text-amber";
      case "secondary": return "text-secondary";
      default: return "text-primary";
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {activeShapes.map((shape, index) => (
        <ParallaxShape 
          key={index} 
          shape={shape} 
          scrollYProgress={scrollYProgress}
          colorClass={getColorClass(shape.color)}
        />
      ))}
    </div>
  );
};

interface ParallaxShapeProps {
  shape: {
    type: string;
    size: number;
    x: string;
    y: string;
    delay: number;
    color: string;
    speed: number;
  };
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  colorClass: string;
}

const ParallaxShape = ({ shape, scrollYProgress, colorClass }: ParallaxShapeProps) => {
  // Each shape moves at different speed for depth effect
  const y = useTransform(scrollYProgress, [0, 1], [0, shape.speed * -150]);
  const x = useTransform(scrollYProgress, [0, 1], [0, (shape.speed - 0.35) * 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, shape.speed * 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1 + shape.speed * 0.2, 1]);

  return (
    <motion.div
      className={`absolute pointer-events-none ${colorClass}`}
      style={{ 
        left: shape.x, 
        top: shape.y,
        y,
        x,
        scale,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.5, 0.9, 0.5],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 2, repeat: Infinity, delay: shape.delay * 0.5 },
        scale: { duration: 0.3, delay: shape.delay * 0.5 },
      }}
    >
      <motion.div
        style={{ rotate: shape.type === "triangle" ? rotate : undefined }}
        animate={{
          y: [0, -20, 0],
          rotate: shape.type !== "triangle" ? undefined : undefined,
        }}
        transition={{
          y: { duration: 2.5 + shape.delay * 0.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {shape.type === "star" && (
          <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.09 8.26L20.18 9.27L15.09 13.14L16.18 19.73L12 16.77L7.82 19.73L8.91 13.14L3.82 9.27L9.91 8.26L12 2Z" />
          </svg>
        )}
        {shape.type === "triangle" && (
          <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3L22 20H2L12 3Z" />
          </svg>
        )}
        {shape.type === "circle" && (
          <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FloatingShapes;
