import { useState } from 'react'
import QuestionScreen from './components/QuestionScreen'
import SuccessScreen from './components/SuccessScreen'

function App() {
  const [screen, setScreen] = useState<'question' | 'success'>('question')

  return (
    <div className="app">
      {screen === 'question' ? (
        <QuestionScreen onYes={() => setScreen('success')} />
      ) : (
        <SuccessScreen />
      )}
    </div>
  )
}

export default App
