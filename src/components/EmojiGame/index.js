import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {idList: [], gameMode: true, score: 0, topScore: 0}

  onClickEmojiItem = id => {
    const {idList, score, topScore, gameMode} = this.state

    if (!idList.includes(id)) {
      if (score === 11) {
        this.setState({gameMode: false, score: 12})
      } else {
        this.setState(prevState => ({
          idList: [...prevState.idList, id],
          score: prevState.score + 1,
        }))
      }
    } else {
      this.setState({gameMode: false})
    }
  }

  onClickPlayAgain = () => {
    const {idList, score, topScore, gameMode} = this.state

    this.setState({
      idList: [],
      score: 0,
      gameMode: true,
      topScore: score,
    })
  }

  render() {
    const {score, topScore, gameMode} = this.state
    const {emojisList} = this.props

    const newList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div>
        <NavBar score={score} topScore={topScore} />
        <div className="ulBgContainer">
          {gameMode ? (
            <ul className="ulBg">
              {newList.map(eachEmoji => (
                <EmojiCard
                  eachEmoji={eachEmoji}
                  onClickEmojiItem={this.onClickEmojiItem}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
