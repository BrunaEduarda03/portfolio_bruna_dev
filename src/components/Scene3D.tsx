import React, {
  useEffect,
  useRef,
  useState,
  CSSProperties,
  ReactNode,
} from "react";

interface GeometricShapeProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const GeometricShape: React.FC<GeometricShapeProps> = ({
  className,
  style,
  children,
}) => {
  return (
    <div className={`absolute ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
};

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Floating Icosahedron-like shape */}
      <GeometricShape
        className="top-[15%] left-[10%] w-32 h-32 md:w-48 md:h-48"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 15}px, 0) rotateX(${mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="relative w-full h-full animate-spin-slow">
          <div
            className="absolute inset-0 border border-amber-500/30 rotate-45"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          />
          <div
            className="absolute inset-2 border border-amber-400/20 rotate-[60deg]"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          />
          <div
            className="absolute inset-4 border border-amber-300/10 rotate-[30deg]"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          />
        </div>
      </GeometricShape>

      {/* Rotating Torus-like ring */}
      <GeometricShape
        className="top-[25%] right-[12%] w-24 h-24 md:w-40 md:h-40"
        style={{
          transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -10}px, 0) rotateX(${60 + mousePos.y * 8}deg) rotateZ(${mousePos.x * 5}deg)`,
          transition: "transform 0.4s ease-out",
        }}
      >
        <div className="w-full h-full animate-spin-reverse">
          <div className="absolute inset-0 rounded-full border-2 border-amber-500/25" />
          <div className="absolute inset-3 rounded-full border border-amber-400/15" />
          <div className="absolute inset-[25%] rounded-full border border-amber-500/20 rotate-45" />
        </div>
      </GeometricShape>

      {/* Octahedron-like shape */}
      <GeometricShape
        className="top-[10%] right-[35%] w-16 h-16 md:w-24 md:h-24"
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 0)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        <div className="w-full h-full animate-float-slow">
          <div className="absolute inset-0 border border-amber-400/25 rotate-45" />
          <div className="absolute inset-0 border border-amber-500/15 rotate-[22.5deg]" />
        </div>
      </GeometricShape>

      {/* Lower left - diamond */}
      <GeometricShape
        className="bottom-[20%] left-[15%] w-20 h-20 md:w-28 md:h-28"
        style={{
          transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * 12}px, 0) rotateZ(45deg)`,
          transition: "transform 0.35s ease-out",
        }}
      >
        <div className="w-full h-full animate-pulse-glow">
          <div className="absolute inset-0 border border-amber-500/20 rounded-sm" />
          <div className="absolute inset-2 border border-amber-400/10 rounded-sm rotate-12" />
        </div>
      </GeometricShape>

      {/* Small triangles scattered */}
      <GeometricShape
        className="top-[55%] right-[20%] w-12 h-12 md:w-16 md:h-16"
        style={{
          transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * -14}px, 0)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <div className="w-full h-full animate-float-fast">
          <div
            className="absolute inset-0 border border-amber-400/20"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>
      </GeometricShape>

      {/* Hexagon top center */}
      <GeometricShape
        className="top-[5%] left-[45%] w-14 h-14 md:w-20 md:h-20"
        style={{
          transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * 10}px, 0)`,
          transition: "transform 0.45s ease-out",
        }}
      >
        <div className="w-full h-full animate-spin-very-slow">
          <div
            className="absolute inset-0 border border-amber-500/15"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          />
        </div>
      </GeometricShape>

      {/* Cross shape */}
      <GeometricShape
        className="bottom-[30%] right-[8%] w-10 h-10 md:w-14 md:h-14"
        style={{
          transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 6}px, 0)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="w-full h-full animate-float-slow flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-amber-500/20" />
          <div className="absolute w-[1px] h-full bg-amber-500/20" />
        </div>
      </GeometricShape>

      {/* Dots/particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-amber-500/20 animate-twinkle"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
            transform: `translate3d(${mousePos.x * (5 + Math.random() * 10)}px, ${mousePos.y * (5 + Math.random() * 10)}px, 0)`,
            transition: "transform 0.5s ease-out",
          }}
        />
      ))}

      {/* Grid lines background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate3d(${mousePos.x * 5}px, ${mousePos.y * 5}px, 0)`,
          transition: "transform 0.6s ease-out",
        }}
      />
    </div>
  );
}

export function SmallScene() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: "600px" }}
    >
      <div className="animate-spin-slow">
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 border-2 border-amber-500/30 rotate-45 rounded-lg" />
          <div className="absolute inset-2 border border-amber-400/20 rotate-[60deg] rounded-lg" />
          <div className="absolute inset-4 border border-amber-300/15 rotate-[30deg] rounded-lg" />
          <div className="absolute inset-[30%] border border-amber-500/25 rounded-full" />
        </div>
      </div>
    </div>
  );
}
