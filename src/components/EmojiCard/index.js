import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickEmojiItem} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickEmoji = () => {
    onClickEmojiItem(id)
  }

  return (
    <li className="cardBg" onClick={onClickEmoji}>
      <img src={emojiUrl} className="emojiImg" alt={emojiName} />
    </li>
  )
}
export default EmojiCard
