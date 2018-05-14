import React from'react';
import './App.css';
import Spotify from '../../util/Spotify';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';



 class App extends React.Component{
    constructor(props){
        super(props);
         this.state = {searchResults: [],
            playlistName: "New Playlist",
            playlistTracks: []};
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack=this.removeTrack.bind(this);
        this.updatePlaylistName=this.updatePlaylistName.bind(this);
        this.savePlayList=this.savePlayList.bind(this);
        this.search=this.search.bind(this);
        
    }
    addTrack(track) {
    if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }
     removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }
    updatePlaylistName(name){
        this.setState({
         playlistName: name
    });
  }    
       
    savePlayList() {

        const trackURIs = this.state.playlistTracks.map(track => track.uri)

    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {

      this.setState(

        {

          playlistName: 'New Playlist',

          playlistTracks: []

        })

    })

  }



 search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
    });
  }

     render(){ 
		return (
		  <div>
			  <h1>Ja<span className="highlight">mmm</span>ing</h1>
			  <div className="App">
              <SearchBar onSearch={this.search}/>
				<div className="App-playlist">
				  <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
				  <PlayList tracks={this.state.playlistTracks} title={this.state.playlistName} onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
				</div>
			  </div>
			</div>
		);
     }
}

export default App;