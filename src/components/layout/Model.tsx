import { IModel } from "@/Interface/common.interface";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface ModelProps {
    currentModel: IModel
}


const Model: React.FC<ModelProps> = ({ currentModel }) => {
    const model = useGLTF("models/" + currentModel.path)

    return (
        <>
            <div className="h-full w-full overflow-hidden">
                <Canvas className="cursor-pointer" frameloop="demand">
                    <ambientLight intensity={0.8} />
                    <PerspectiveCamera
                        makeDefault
                        rotation={[Math.PI, 0, 0]}
                        fov={75}
                        position={[10, 10, -6]}
                        near={1}
                        far={1000}
                    ></PerspectiveCamera>
                    
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <primitive object={model.scene} scale={5} />
                </Canvas>
            </div>
        </>
    );
};


Model.displayName = 'Model'
export default Model