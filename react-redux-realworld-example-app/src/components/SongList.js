import SongPreview from './SongPreview';
import ListPagination from './ListPagination';
import React from 'react';


    const SongList = props => {
      if (!props.songs) {
        return (
            <div className="song-preview">Loading...</div>
        );
      }

      if (props.songs.length === 0) {
        return (
            <div className="song-preview">
              Click global feed to see songs
            </div>
        );
      }
    return (
        <div>
          {
            props.songs.map(song => {
              return (
                  <SongPreview song={song} key={song.slug} />
              );
            })
          }

          <ListPagination
              pager={props.pager}
              songsCount={props.songsCount}
              currentPage={props.currentPage} />
        </div>
    );


};


export default SongList;
