import React from 'react'
//import ItunesSearchForm from './ItunesSearchForm'
import SearchResults from './SearchResults'
import './App.css'


export default class App extends React.Component { 
  constructor() {
    super()

    this.state = {
      mediaType: "movie",
      searchTerm: "agent",
      mediaChange: "",
      searchChange: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMediaTypeUpdate = this.handleMediaTypeUpdate.bind(this);
    this.handleSearchTermUpdate = this.handleSearchTermUpdate.bind(this);
  }

  handleMediaTypeUpdate(event) {
    this.setState({
      mediaType: event.target.value
    })
  }

  handleSearchTermUpdate(event) {
    if (event.target.value.length > 2)
    this.setState({
      searchChange: event.target.value
    })
  }

  handleSubmit(event) {
    this.setState({
      mediaType: this.state.mediaType,
      searchTerm: this.state.searchChange
    })

    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header className="nwm-header">
          APPLE's iTunes Movie/eBook Search
        </header>

        <form onSubmit={this.handleSubmit}>
          <select className='media-select' onChange={this.handleMediaTypeUpdate} value={this.state.mediaType}>
            <option>Choose a media type</option>
            <option value='ebook' selected='selected'>eBook</option>
            <option value='movie'>Movie</option>
          </select>

          <input name='searchTerm' 
            className='search-term'
            placeholder="Enter search term (ie agent)" 
            onChange={this.handleSearchTermUpdate} 
          />
          <div className='submit' >
            <input type='submit' name='updateSearch' value='SEARCH' />
          </div>
        </form>
      <div className="list-header">List of Available {this.state.mediaType} Media </div>


        <SearchResults mediaType={this.state.mediaType} searchTerm={this.state.searchTerm} />


      </div>
    );
  }
}
