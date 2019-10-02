import React from 'react';
import { Link } from 'react-router-dom';
/*import agent from '../agent';*/
import { connect } from 'react-redux';



const SongPreview = props => {
    const song = props.song;


    return (
        <div className="song-preview">
            <div className="song-meta">
                <Link to={`/@${song.author.username}`}>
                    <img src={song.author.image} alt={song.author.username} />
                </Link>

                <div className="info">
                    <Link className="author" to={`/@${song.author.username}`}>
                        {song.author.username}
                    </Link>
                    <span className="date">
            {new Date(song.createdAt).toDateString()}
          </span>
                </div>

            </div>

            <Link to={`/song/${song.slug}`} className="preview-link">
                <h1>{song.title}</h1>
                <p>{song.description}</p>
                <span>Read more...</span>

                <ul className="tag-list">
                    {
                        song.tagList.map(tag => {
                            return (
                                <li className="tag-default tag-pill tag-outline" key={tag}>
                                    {tag}
                                </li>
                            )
                        })
                    }
                </ul>

            </Link>
        </div>
    );
}

export default connect(() => ({}),)(SongPreview);
