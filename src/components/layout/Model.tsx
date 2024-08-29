import { RootState } from "@/state/store";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  AmbientLight,
  MeshStandardMaterial,
  RepeatWrapping,
  TextureLoader,
} from "three";
interface ModelProps {}

const Model: React.FC<ModelProps> = () => {
  const activeImage = useSelector(
    (state: RootState) => state.images.activeImage
  );
  const activeModel = useSelector(
    (state: RootState) => state.models.activeModel
  );

  useEffect(() => {
    if (activeImage) loadFloor();
  }, [activeImage]);

  // @ts-expect-error
  const { scene } = useGLTF(activeModel.path);
  // const { materials, nodes } = useGLTF("models/" + activeModel.path)

  const loadFloor = () => {
    const floorTexture = new TextureLoader().load(activeImage?.path ?? "");
    const floorMaterial = new MeshStandardMaterial();

    floorMaterial.map = floorTexture;
    floorTexture.wrapS = RepeatWrapping;
    floorTexture.wrapT = RepeatWrapping;
    floorTexture.repeat.set(7, 7);
    // floorMaterial.roughness = 1;
    // floorMaterial.metalness = 1;

    const ambientLight = new AmbientLight(0x404040, 1); // Soft white light
    scene.add(ambientLight);

    // const geometry = new THREE.PlaneGeometry(10, 10);
    // const reflector = new Reflector(geometry, {
    //     clipBias: 0.003,
    //     textureWidth: window.innerWidth * window.devicePixelRatio,
    //     textureHeight: window.innerHeight * window.devicePixelRatio,
    //     color: 0x889999
    // });
    // reflector.rotation.x = -Math.PI / 2;
    // scene.add(reflector);

    scene.traverse((child) => {
      console.log("child", child?.name);
      if (child.name === activeModel?.floorTextureName) {
        child.children.map((c) => {
          // @ts-ignore
          if (c.isMesh) {
            // c.material.map = floorTexture;
            // @ts-ignore
            c.material = floorMaterial;
            // @ts-ignore
            c.material.needsUpdate = true;
          }
        });
      } else if (child.name === "Wall_Floor_0") {
        console.log("activeModel", activeModel);
        child.children.map((c) => {
          // @ts-ignore
          if (c.isMesh) {
            // c.material.map = floorTexture;
            // @ts-ignore
            c.material = floorMaterial;
            // @ts-ignore
            c.material.needsUpdate = true;
          }
        });
      }
    });
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <Canvas className="cursor-pointer modalsmall" frameloop="demand">
        <ambientLight intensity={1.2} />
        <ambientLight intensity={1.2} />
        <PerspectiveCamera
          makeDefault
          rotation={[Math.PI, 0, 0]}
          fov={75}
          position={[10, 10, -6]}
          near={1}
          far={1000}
        ></PerspectiveCamera>

        <OrbitControls enableZoom={true} enablePan={true} />
        <primitive object={scene} scale={5} />
        {/* <Environment preset="forest"/> */}
      </Canvas>
    </div>
  );
};

Model.displayName = "Model";
export default Model;
