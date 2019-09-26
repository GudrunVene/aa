import SongMeta from './SongMeta';

import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import marked from 'marked';
import { SONG_PAGE_LOADED, SONG_PAGE_UNLOADED } from '../../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.song,
    currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: SONG_PAGE_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: SONG_PAGE_UNLOADED })
});

class Song extends React.Component {
    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.Songs.get(this.props.match.params.id)
        ]));
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        if (!this.props.song) {
            return null;
        }

        const markup = { __html: marked(this.props.song.body, { sanitize: true }) };
        const canModify = this.props.currentUser &&
            this.props.currentUser.username === this.props.song.author.username;
        return (
            <div className="song-page">

                <div className="banner">
                    <div className="container">

                        <h1>{this.props.song.title}</h1>
                        <SongMeta
                            song={this.props.song}
                            canModify={canModify} />

                    </div>
                </div>

                <div className="container page">

                    <div className="row song-content">
                        <div className="col-xs-12">

                            <div dangerouslySetInnerHTML={markup}></div>



                        </div>
                    </div>

                    <hr />

                    <div className="song-actions">
                    </div>


                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
