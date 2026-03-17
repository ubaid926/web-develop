import { useRef, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function GradientPlane() {
  const materialRef = useRef();

  // FIX: Start at 0.5 so the shadows are visible immediately
  const uniforms = useMemo(() => ({
    uScroll: { value: 0.5 },
    uTime: { value: 0 },
  }), []);

  useGSAP(() => {
    if (!materialRef.current) return;

    // Scroll driven
    gsap.to(materialRef.current.uniforms.uScroll, {
      value: 1.2, // overshoot a bit for more drama
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      }
    });

    // Gentle breathing / floating
    gsap.to(materialRef.current.uniforms.uTime, {
      value: 100,
      duration: 40,
      repeat: -1,
      ease: "none"
    });
  }, { dependencies: [materialRef] });

  return (
    <mesh scale={[10, 10, 1]}>
      <planeGeometry args={[2, 2]} />
      {/* <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
      uniform float uTime;

void main() {
  vec2 p = vUv;

  float breath = 1.0 + sin(uTime * 0.4) * 0.04; // tiny pulse

  vec2 c1 = vec2(
    0.28 + (uScroll * 0.18) + sin(uTime * 0.15 + 1.2) * 0.03,
    0.42 + (uScroll * 0.08) + cos(uTime * 0.17) * 0.025
  ) * breath;

  vec2 c2 = vec2(
    0.72 - (uScroll * 0.12) + cos(uTime * 0.13 + 0.8) * 0.035,
    0.58 - (uScroll * 0.14) + sin(uTime * 0.16) * 0.03
  ) * breath;

  float b1 = blob(p, c1, 0.65);
  float b2 = blob(p, c2, 0.48);
  float b3 = blob(p, vec2(0.5 + sin(uTime*0.2)*0.04, 0.5 + cos(uTime*0.18)*0.03), 0.25);

  vec3 bgColor   = vec3(0.96, 0.975, 0.99);   
  vec3 blobColor = vec3(0.88, 0.82, 0.94);     

  vec3 color = mix(bgColor, blobColor, b1 + b2 + b3);
  gl_FragColor = vec4(color, 1.0);
}

        `}
      /> */}
    </mesh>
  );
}