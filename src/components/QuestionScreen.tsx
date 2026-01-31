import { useState, useMemo } from 'react'

interface QuestionScreenProps {
  onYes: () => void
}

function QuestionScreen({ onYes }: QuestionScreenProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false)

  const hearts = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      key: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 6}s`
    }))
  , [])

  const handleNoHover = () => {
    const maxX = window.innerWidth / 2
    const maxY = window.innerHeight / 2

    const newX = Math.random() * maxX
    const newY = Math.random() * maxY

    setNoButtonPosition({ x: newX, y: newY })
    setIsNoButtonMoved(true)
  }

  return (
    <div className="question-screen">
      <div className="hearts-background">
        {hearts.map((heart) => (
          <div
            key={heart.key}
            className="floating-heart"
            style={{
              left: heart.left,
              top: heart.top,
              animationDelay: heart.animationDelay,
              animationDuration: heart.animationDuration
            }}
          >💜</div>
        ))}
      </div>

      <div className="content">
        <img
          src="https://media.tenor.com/t7WGV6oRYJEAAAAM/kitten-hearts.gif"
          alt="Cute kitten with hearts"
          className="question-cat"
          draggable={false}
        />

        <h1 className="question-text">Will you be my valentine?</h1>

        <div className={`buttons-container ${isNoButtonMoved ? 'no-button-escaped' : ''}`}>
          <button className="yes-button" onClick={onYes}>
            Yes! 💜
          </button>

          <button
            className={`no-button ${isNoButtonMoved ? 'escaped' : ''}`}
            onMouseEnter={handleNoHover}
            style={isNoButtonMoved ? {
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`
            } : {}}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionScreen
