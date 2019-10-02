
import SongList from '../SongList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';


const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('all', agent.Songs.all, agent.Songs.all());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        className={ props.tab === 'all' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        Global Feed
      </a>
    </li>
  );
};


const mapStateToProps = state => ({

  ...state.songList,
    tags: state.home.tags,
  token: state.common.token
});

const TagFilterTab = props => {
    if (!props.tag) {
        return null;
    }

    return (
        <li className="nav-item">
            <a href="" className="nav-link active">
                <i className="ion-pound"></i> {props.tag}
            </a>
        </li>
    );
};

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">


          <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />

            <TagFilterTab tag={props.tag} />

        </ul>
      </div>



      <SongList
        pager={props.pager}
        songs={props.songs}
        loading={props.loading}
        songsCount={props.songsCount}
        currentPage={props.currentPage} />
      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
