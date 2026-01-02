import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Float,
  MeshTransmissionMaterial,
  PresentationControls,
  ContactShadows,
  Environment
} from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

type ThemeColors = {
  primary: string;
  accent: string;
  foreground: string;
};

function readHslVar(varName: string) {
  if (typeof window === "undefined") return "hsl(0 0% 100%)";
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return raw ? `hsl(${raw})` : "hsl(0 0% 100%)";
}

function useThemeColors(): ThemeColors {
  const [colors, setColors] = useState<ThemeColors>(() => ({
    primary: "hsl(0 0% 100%)",
    accent: "hsl(0 0% 100%)",
    foreground: "hsl(0 0% 100%)",
  }));

  useEffect(() => {
    const update = () => {
      setColors({
        primary: readHslVar("--primary"),
        accent: readHslVar("--accent"),
        foreground: readHslVar("--foreground"),
      });
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => observer.disconnect();
  }, []);

  return colors;
}

// Security Shield 3D Model
function SecurityShield({ hovered, colors }: { hovered: boolean; colors: ThemeColors }) {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const dataRingRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -state.clock.elapsedTime * 0.5;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
      coreRef.current.scale.setScalar(hovered ? scale * 1.1 : scale);
    }
    if (dataRingRef.current) {
      dataRingRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const dataParticles = useMemo(() => {
    const particles = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      const angle = (i / 100) * Math.PI * 2;
      const radius = 1.8 + Math.sin(i * 0.5) * 0.2;
      particles[i * 3] = Math.cos(angle) * radius;
      particles[i * 3 + 1] = Math.sin(i * 0.3) * 0.3;
      particles[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return particles;
  }, []);

  return (
    <group ref={meshRef}>
      {/* Outer shield - hexagonal shape */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.3}
          chromaticAberration={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.05}
          color={colors.primary}
          transmission={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Security rings */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.1, 0.03, 16, 64]} />
        <meshStandardMaterial
          color={colors.primary}
          emissive={colors.primary}
          emissiveIntensity={2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.02, 16, 64]} />
        <meshStandardMaterial
          color={colors.accent}
          emissive={colors.accent}
          emissiveIntensity={1.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Core - lock symbol representation */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color={colors.primary}
          emissive={colors.primary}
          emissiveIntensity={3}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Data stream particles */}
      <points ref={dataRingRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={dataParticles.length / 3}
            array={dataParticles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color={colors.primary}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Floating security nodes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const theta = (i / 12) * Math.PI * 2;
        const radius = 2;
        return (
          <Float key={i} speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
            <mesh
              position={[
                Math.cos(theta) * radius,
                Math.sin(i * 0.5) * 0.4,
                Math.sin(theta) * radius,
              ]}
            >
              <boxGeometry args={[0.05, 0.05, 0.05]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? colors.primary : colors.accent}
                emissive={i % 2 === 0 ? colors.primary : colors.accent}
                emissiveIntensity={2}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

function ProductScene({ hovered, colors }: { hovered: boolean; colors: ThemeColors }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color={colors.primary}
        castShadow
      />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color={colors.accent}
      />
      <pointLight position={[0, 5, 0]} intensity={0.35} color={colors.foreground} />

      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, -Math.PI / 6, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
          <SecurityShield hovered={hovered} colors={colors} />
        </Float>
      </PresentationControls>

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.3}
        scale={10}
        blur={2}
        far={4}
        color={colors.primary}
      />

      <Environment preset="night" />
    </>
  );
}

const specs = [
  { label: "Threat Detection", value: "< 50ms", icon: "🛡️" },
  { label: "Encryption Level", value: "AES-256", icon: "🔐" },
  { label: "Endpoints Protected", value: "∞", icon: "💻" },
  { label: "Compliance Score", value: "100%", icon: "✓" },
];

export default function Featuresection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);
  const colors = useThemeColors();

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative z-10 overflow-hidden"
      aria-label="Interactive security architecture"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.10) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono text-primary mb-6 bg-background/70 backdrop-blur-sm border border-border/40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            INTERACTIVE 3D SECURITY MODEL
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Defense </span>
            <span className="text-primary">Architecture</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore our multi-layered security infrastructure. Drag to rotate, interact with the 3D model.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Viewer */}
          <motion.div
            className="relative aspect-square max-w-xl mx-auto w-full order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl blur-3xl" />
            
            {/* Canvas container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background/60 backdrop-blur-xl border border-border/50">
              <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                dpr={[1, 2]}
              >
                <ProductScene hovered={hovered} colors={colors} />
              </Canvas>

              {/* Interaction hint */}
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs font-mono text-muted-foreground bg-background/70 backdrop-blur-sm border border-border/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                  DRAG TO ROTATE
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Specs */}
          <motion.div
            className="space-y-4 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Security Specifications</h3>
            
            <div className="space-y-3">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  className="group p-5 rounded-lg bg-background/70 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{spec.icon}</span>
                      <span className="text-muted-foreground text-sm">{spec.label}</span>
                    </div>
                    <span className="text-xl font-bold font-mono text-primary">
                      {spec.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  Request Security Demo
                  <span aria-hidden className="translate-y-[1px]">→</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}