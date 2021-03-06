import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {searchResults:
      [
      name: 'dima',
      artist: 'domo',
      album: 'dumu',
      id: 'dama',
      ],
      playlistName: 'deme',
      playlisttracks: [
        name: 'dima',
        artist: 'domo',
        album: 'dumu',
        id: 'dama',
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
         </div>
      </div>
    </div>
    );
  }
}

export default App;
