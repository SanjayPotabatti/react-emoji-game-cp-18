import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props

  const onPlayAgain = () => {
    onClickPlayAgain()
  }

  const onWin = () => (
    <div className="winlosCard">
      <div className="textContainer">
        <h1 className="headingwon">You Won</h1>
        <p className="parawon">Best Score</p>
        <p className="scoreStyle">{score}/12</p>
        <button type="button" className="playButton" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        className="wonLosImg"
        alt="winGame"
      />
    </div>
  )

  const onLose = () => (
    <div className="winlosCard">
      <div className="textContainer">
        <h1 className="headingwon">You Lose</h1>
        <p className="parawon">Score</p>
        <p className="scoreStyle">{score}/12</p>
        <button type="button" className="playButton" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="wonLosImg"
        alt="losGame"
      />
    </div>
  )

  return score === 12 ? onWin() : onLose()
}

export default WinOrLoseCard
