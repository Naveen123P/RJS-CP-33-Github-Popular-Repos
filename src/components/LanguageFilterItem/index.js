// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {allLanguages, changeSelectedLanguage, isActivate} = props
  const {id, language} = allLanguages
  const isActivatedLanguage = isActivate
    ? 'language-style activate'
    : 'language-style'

  const onClickLanguage = () => {
    changeSelectedLanguage(id)
  }

  return (
    <li className="list-styles">
      <button
        type="button"
        onClick={onClickLanguage}
        className={isActivatedLanguage}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
