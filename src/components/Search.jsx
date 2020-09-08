import React, { useState } from 'react'

const Search = ({onUserSearch}) => {
  const [term, setTerm] = useState('')

  const onFormSubmit = e => {
    e.preventDefault()
    onUserSearch(term)
    setTerm('')
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
            placeholder='Search For Something...'
          />
        </div>
      </form>
    </div>
  )
}

export default Search
