import {useMemo} from 'react'

function SuccessScreen() {
    const catGifs = useMemo(() => [
        {
            src: "https://media.giphy.com/media/OP4C9oeeSVIrwgFNAk/giphy.gif",
            alt: "Raccoon",
            left: '20%',
            top: '20%'
        },
        {
            src: "https://media0.giphy.com/media/rrasLFSTyi4Th1e8Xo/giphy.gif",
            alt: "Happy cat",
            left: '75%',
            top: '15%'
        },
        {
            src: "https://media.giphy.com/media/h7deZA51Ru9pwzlz0C/giphy.gif",
            alt: "Headbanging cat",
            left: '23%',
            top: '75%'
        },
        {
            src: "https://media.giphy.com/media/qxQa0C2zs1iUmriUXt/giphy.gif",
            alt: "Chipi chapa",
            left: '75%',
            top: '65%'
        },
        {
            src: "https://media.tenor.com/zkaB7Dlry8YAAAAm/hug.webp",
            alt: "Cat hug",
            left: '50%',
            top: '85%'
        }
    ], [])

    return (
        <div className="success-screen">
            <div className="confetti-container">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="confetti"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            backgroundColor: ['#E0BBE4', '#FFD1DC', '#D4A5D7', '#FFF0F5'][Math.floor(Math.random() * 4)]
                        }}
                    />
                ))}
            </div>

            <div className="floating-hearts-up">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="heart-up"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            fontSize: `${20 + Math.random() * 30}px`
                        }}
                    >💜</div>
                ))}
            </div>

            <video
                className="celebration-video"
                autoPlay
                playsInline
            >
                <source src="boogieboogiehedgehog.mp4" type="video/mp4"/>
            </video>

            <div className="content">
                <h1 className="celebration-text">Yay! 💜</h1>
                <p className="celebration-subtitle">Can't wait princess!</p>

                <div className="sparkles">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="sparkle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        >✨</div>
                    ))}
                </div>
            </div>

            {catGifs.map((cat, i) => (
                <img
                    key={i}
                    src={cat.src}
                    alt={cat.alt}
                    className="celebration-cat-random"
                    draggable={false}
                    style={{
                        left: cat.left,
                        top: cat.top
                    }}
                />
            ))}
        </div>
    )
}

export default SuccessScreen
