import SongActions from './SongActions';
import { Link } from 'react-router-dom';
import React from 'react';

const SongMeta = props => {
    const song = props.song;
    return (
        <div className="song-meta">
            <Link to={`/@${song.author.username}`}>
                <img src={song.author.image} alt={song.author.username} />
            </Link>

            <div className="info">
                <Link to={`/@${song.author.username}`} className="author">
                    {song.author.username}
                </Link>
                <span className="date">
          {new Date(song.createdAt).toDateString()}
        </span>
            </div>

            <SongActions canModify={props.canModify} song={song} />
        </div>
    );
};

export default SongMeta;
