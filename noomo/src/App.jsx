import { Canvas } from '@react-three/fiber';
import { SpotLight } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import GradientPlane from './components/gradientPlane'; // adjust path
import { useHelper } from '@react-three/drei'
import { useRef } from 'react';
function App() {
  const MyLight = function () {
    const lightRef1 = useRef()
    const lightRef2 = useRef()

    useHelper(lightRef1, SpotLightHelper, 'black')
    useHelper(lightRef2, SpotLightHelper, 'blue')

    return (
      <>
        <spotLight
          ref={lightRef1}
          position={[-2, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={50}
          decay={0}
          color={'#f11e48'}
        />

        <spotLight
          ref={lightRef2}
          position={[1, 2, 5]}
          angle={0.3}
          penumbra={1}
          intensity={50}
          decay={0}
          color={'#eddee1'}
        />
      </>
    )
  }

  function Plane() {
    return (
      <mesh >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#cad6ec" />
      </mesh>
    )
  }
  return (
    <div className="relative w-full h-[200vh] ">
      {/* Background Layer: Must be FIXED to stay behind the content */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <ambientLight intensity={4} color='#cad6ec' />
          {/* <GradientPlane /> */}
          {/* <spotLight
            position={[1, 1, 1]}
            ref={lightRef}
            // angle={0.15}
            // penumbra={1}
            intensity={2}
            castShadow
            color={'black'}
          /> */}
          <Plane />
          <MyLight />
        </Canvas>
      </div>

      {/* Scrollable Layer: Must have height to enable scrollbar */}
      <div className="scroll-container relative z-10 min-h-[300vh] p-20">
        <h1 className="text-6xl font-bold text-slate-800">Hello, World</h1>
        <p className="mt-10 text-xl text-slate-600">Scroll down to see the shadows drift...</p>

        {/* Add dummy content to ensure the page scrolls */}
        <div className="h-[200vh]"></div>
      </div>
    </div>
  );
}

export default App;