import './App.css'
import ImageSelector from './components/layout/ImageSelector'
import ModelSelector from './components/layout/ModelSelector'
import ModelWrapper from './components/layout/ModelWrapper'

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <ModelSelector />
        <ModelWrapper />
        <ImageSelector />
      </div>
    </>
  )
}

export default App