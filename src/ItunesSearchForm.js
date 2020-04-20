import React from 'react'

export default class ItunesSearchForm extends React.Component {

  render() {
    return (
      <form>
        <select className='media_select'>
        <option>Choose a media type</option>
        <option value='books'>Books</option>
        <option value='music'>Music</option>
        <option value='video'>Video</option>
        </select>
        <input name='search_text' value={this.state} />
  <input type='submit' value='SEARCH' />
      </form>
    )
  }
}
  