import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changePage, requestFriends, setFirstPage, toggleFollowingOfFriends } from '../../redux/friendsReducer.ts';
import Paginator from '../common/Preloader/Paginator/Paginator.tsx';
import Preloader from '../common/Preloader/Preloader';
import User from '../User/User';
import style from './Friends.module.css'

const Friends = ({
  requestFriends,
  toggleFollowingOfFriends,
  changePage,
  setFirstPage,
  friends,
  totalCount,
  count,
  page,
  isFetching,
  followingInProgress,
  portionSize
}) => {
  useEffect(() => {
    requestFriends(page, count)
    return setFirstPage();
  }, [count]);

  let onPageChenged = currentPage => {
    changePage(currentPage);
    requestFriends(
      currentPage,
      count
    )
  }
  
  return (
    <div>
      <Paginator page={page} count={count} 
        totalCount={totalCount} portionSize={portionSize} 
        onPageChanged={onPageChenged} 
      />
      {isFetching === true && <Preloader/>}
      {friends.map(el => (
        <User
          user={el} key={el.id}
          followingInProgress={followingInProgress} 
          toggleFollowing={toggleFollowingOfFriends} 
        />
      ))}
    </div>
  )
}

let mapStateToProps = (state) => ({
  friends: state.friends.friends,
  totalCount: state.friends.totalCount,
  count: state.friends.pageSize,
  page: state.friends.page,
  isFetching: state.friends.isFetching,
  followingInProgress: state.friends.followingInProgress,
  portionSize: state.friends.portionSize
});

export default connect(mapStateToProps, {
  requestFriends,
  toggleFollowingOfFriends,
  changePage,
  setFirstPage
})(Friends);