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
      <ul className="counts-list">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="star"
            className="star"
          />
          <p className="count-text"> {starsCount}</p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="forks"
          />
          <p className="count-text"> {forksCount}</p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="issues"
          />
          <p className="count-text"> {issuesCount}</p>
        </li>
      </ul>
    </li>
  )
}

export default RepositoryItem
