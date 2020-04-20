import React from 'react'
//import ItunesSearchForm from './ItunesSearchForm'
import SearchResults from './SearchResults'
import logo from './logo.svg'
import './App.css'


export default class App extends React.Component { 


  render() {
    return (
      <div className="App">
        <header className="nwm-header">
{/*          <ItunesSearchForm />
*/}        </header>
        <form>
        <select className='media_select'>
        <option>Choose a media type</option>
        <option value='books'>Books</option>
        <option value='music'>Music</option>
        <option value='video'>Video</option>
        </select>
        <input name='search_text' value={this.state} />
        <input type='submit' value='SEARCH' onClick='<GoSearch \>'/>
      </form>
        <SearchResults />

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

      </div>
    );
  }
}
