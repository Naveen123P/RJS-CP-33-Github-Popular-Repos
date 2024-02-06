import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const isActivate = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    selectedLanguageId: isActivate[0].id,
    coursesList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getCoursesList()
  }

  getCoursesList = async () => {
    const {selectedLanguageId} = this.state
    this.setState({isLoading: true})

    const url = `https://apis.ccbp.in/popular-repos?language=${selectedLanguageId}`
    const options = {
      headers: {
        authorization:
          'Bearer 7e7613420c982725c51779f3763ac700fb2120ea0f9fb21bacdebb4a7c0d3736',
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.map(course => ({
        name: course.name,
        id: course.id,
        issuesCount: course.issues_count,
        forksCount: course.forks_count,
        starsCount: course.stars_count,
        avatarUrl: course.avatar_url,
      }))
      this.setState({coursesList: updatedData, isLoading: false})
    }
  }

  changeSelectedLanguage = id => {
    this.setState({selectedLanguageId: id}, this.getCoursesList)
  }

  renderFailure = () => (
    <div className="failure-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
    </div>
  )

  renderLoader = () => (
    <div className="course-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {selectedLanguageId, coursesList, isLoading} = this.state
    console.log(isLoading)
    return (
      <>
        <h1 className="heading">Popular</h1>
        <ul className="languages-list">
          {isActivate.map(language => (
            <LanguageFilterItem
              allLanguages={language}
              key={language.id}
              changeSelectedLanguage={this.changeSelectedLanguage}
              isActivate={language.id === selectedLanguageId}
            />
          ))}
        </ul>
        {/* {isLoading : } */}
        <ul className="courses-list">
          {coursesList.map(course => (
            <RepositoryItem courseDetails={course} key={course.id} />
          ))}
        </ul>
      </>
    )
  }
}

export default GithubPopularRepos
