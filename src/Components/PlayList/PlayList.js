import React from 'react';
import  './PlayList.css';
import TrackList from '../TrackList/TrackList';


 class PlayList extends React.Component{
    constructor(props){
        super(props);
        this.handleNameChange=this.handleNameChange.bind(this);
    }
    handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

    
    render(){
        return(
        <div className="Playlist">
  <input defaulValue={'NewPlayList'}/>
 <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} onChange={this.handleChange} />
  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
            )
    }
}

export default PlayList;