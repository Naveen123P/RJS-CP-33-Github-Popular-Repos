import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'
const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {selectedLanguage: languageFiltersData[0].language}

  render() {
    return (
      <>
        <h1 className="heading">Popular</h1>
        <ul className="languages-list">
          {languageFiltersData.map(language => (
            <LanguageFilterItem
              language={language.language}
              key={language.id}
            />
          ))}
        </ul>
        <ul className="courses-list">
          {xxx.map(course => (
            <RepositoryItem courseDetails={course} />
          ))}
        </ul>
      </>
    )
  }
}

export default GithubPopularRepos
