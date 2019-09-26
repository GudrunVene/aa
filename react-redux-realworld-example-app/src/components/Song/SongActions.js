import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_SONG } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
    onClickDelete: payload =>
        dispatch({ type: DELETE_SONG, payload })
});

const SongActions = props => {
    const song = props.song;
    const del = () => {
        props.onClickDelete(agent.Songs.del(song.slug))
    };
    if (props.canModify) {
        return (
            <span>

        <Link
            to={`/editor/${song.slug}`}
            className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Song
        </Link>

        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a"></i> Delete Song
        </button>

      </span>
        );
    }

    return (
        <span>
    </span>
    );
};

export default connect(() => ({}), mapDispatchToProps)(SongActions);
