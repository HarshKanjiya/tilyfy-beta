import { useState } from 'react'
import './App.css'
import ImageSelector from './components/layout/ImageSelector'
import ModelSelector from './components/layout/ModelSelector'
import ModelWrapper from './components/layout/ModelWrapper'
import { IImage, IModel } from './Interface/common.interface'

function App() {
  const [currentModel, setCurrentModel] = useState<IModel | null>(null)
  const [images, setImages] = useState<IImage[]>(textureList)
  const [currentTexture, setCurrentTexture] = useState<IImage | null>(null)

  const onSetCurrentModel = (id: number) => {
    const _temp = modelList.find((_) => _.id == id)
    setCurrentModel(_temp ?? null)
  }

  const onAddImage = (data: IImage) => {
    setImages([...images, data])
  }

  const onSetTexture = (id: number) => {
    const _temp = images.find((_) => _.id == id)
    setCurrentTexture(_temp ?? null)
  }

  return (
    <>
      <div className="flex min-h-screen w-full">
        <ModelSelector currentModel={currentModel} setCurrentModel={onSetCurrentModel} modelList={modelList} />
        <ModelWrapper currentModel={currentModel} currentTextureIamge={currentTexture} />
        <ImageSelector images={images} addImage={onAddImage} onSetTexture={onSetTexture} />
      </div>
    </>
  )
}

export default App


const modelList: IModel[] = [
  {
    id: 1,
    name: "Hospital",
    path: "hospital.glb"
  },
  {
    id: 2,
    name: "Dining Room",
    path: "dining_room.glb"
  },
  {
    id: 3,
    name: "Living Room",
    path: "living_room.glb"
  },
]

const textureList: IImage[] = [
  {
    id: 1,
    name: "texture1",
    path: "texture1.jpg"
  },
  {
    id: 2,
    name: "texture2",
    path: "texture2.jpg"
  },
  {
    id: 3,
    name: "texture3",
    path: "texture4.jpg"
  },
]