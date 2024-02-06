// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {courseDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = courseDetails

  return (
    <li className="course-item">
      <div className="avatar-img-container">
        <img src={avatarUrl} alt={name} className="avatar-img" />
        <h1 className="avatar-name">{name}</h1>
      </div>
      <div className="counts-list">
        <div className="count-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon"
          />
          <p className="count-text"> {starsCount}</p>
        </div>
        <div className="count-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon"
          />
          <p className="count-text"> {forksCount}</p>
        </div>
        <div className="count-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon"
          />
          <p className="count-text"> {issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
