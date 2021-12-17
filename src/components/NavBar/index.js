import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <nav className="navBg">
      <div className="navSmallContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logoImg"
        />
        <p className="navHeading">Emoji Game</p>
      </div>
      <div className="navSmallContainer">
        <p className="navHeading">Score: {score}</p>
        <p className="navHeading">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
