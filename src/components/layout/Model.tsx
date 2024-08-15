import { IModel } from "@/Interface/common.interface";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { AmbientLight, MeshPhongMaterial, MeshStandardMaterial, RepeatWrapping, TextureLoader } from "three";
import * as THREE from "three"
import { Reflector } from "three/examples/jsm/Addons.js";
interface ModelProps {
    currentModel: IModel,
    floorImage: string | undefined
}


const Model: React.FC<ModelProps> = ({ currentModel, floorImage }) => {
    const { scene } = useGLTF("models/" + currentModel.path)
    // const { materials, nodes } = useGLTF("models/" + currentModel.path)
    useEffect(() => {
        if (floorImage) loadFloor()
    }, [floorImage, scene])

    const loadFloor = () => {
        const floorTexture = new TextureLoader().load(`/textures/${floorImage}`);
        const floorMaterial = new MeshStandardMaterial();

        floorMaterial.map = floorTexture;
        floorTexture.wrapS = RepeatWrapping;
        floorTexture.wrapT = RepeatWrapping;
        floorTexture.repeat.set(7, 7);
        floorMaterial.roughness = 0;
        floorMaterial.metalness = 0.3;

        const ambientLight = new AmbientLight(0x404040, 1); // Soft white light
        scene.add(ambientLight);


        const geometry = new THREE.PlaneGeometry(10, 10);
        const reflector = new Reflector(geometry, {
            clipBias: 0.003,
            textureWidth: window.innerWidth * window.devicePixelRatio,
            textureHeight: window.innerHeight * window.devicePixelRatio,
            color: 0x889999
        });
        reflector.rotation.x = -Math.PI / 2;
        scene.add(reflector);


        scene.traverse((child) => {
            if (child.name === 'floor') {
                child.children.map((c) => {
                    if (c.isMesh) {
                        // c.material.map = floorTexture;
                        c.material = floorMaterial;
                        c.material.needsUpdate = true;
                    }
                })
            }
        })
    }



    return (
        <>

            <div className="h-full w-full overflow-hidden">
                <Canvas className="cursor-pointer" frameloop="demand">
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
                </Canvas>
            </div>
        </>
    );
};


Model.displayName = 'Model'
export default Model
