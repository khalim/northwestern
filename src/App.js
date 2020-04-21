import React from 'react'
//import ItunesSearchForm from './ItunesSearchForm'
import SearchResults from './SearchResults'
import logo from './logo.svg'
import './App.css'


export default class App extends React.Component { 
  constructor() {
    super()

    this.state = {
      mediaType: "movie",
      searchTerm: "black",
      searchChange: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchTermUpdate = this.handleSearchTermUpdate.bind(this);
  }

  handleSearchTermUpdate(event) {
    if (event.target.value.length > 2)
    this.setState({
      searchChange: event.target.value
    })
    
//    console.log(this.state.searchTerm.length)
    console.log(event.target.value.length)
  }

  handleSubmit(event) {
console.log("EVENT:")
console.log(event)
    this.setState({
      searchTerm: this.state.searchChange
    })

//    console.log("event")
 //   console.log(event)
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header className="nwm-header">
{/*          <ItunesSearchForm />
*/}        </header>
        <form onSubmit={this.handleSubmit}>
        <select className='media_select'>
          <option>Choose a media type</option>
          <option value='books'>Books</option>
          <option value='music'>Music</option>
          <option value='movie'>Movie</option>
        </select>
        <input name='searchTerm'  onChange={this.handleSearchTermUpdate} />
        <input type='submit' name='updateSearch' value='SEARCH' />
          
      </form>
        <SearchResults mediaType={this.state.mediaType} searchTerm={this.state.searchTerm} />

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

      </div>
    );
  }
}
