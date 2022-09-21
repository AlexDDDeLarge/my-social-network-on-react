import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changePage, requestFriends, setFirstPage, toggleFollowingOfFriends } from '../../redux/friendsReducer';
import { AppStateType } from '../../redux/reduxStore';
import { UserType } from '../../types/types';
import Paginator from '../common/Preloader/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import User from '../User/User';
import style from './Friends.module.css'

type MapStatePropsType = {
  friends: Array<UserType>
  totalCount: number
  count: number
  page: number
  isFetching: boolean
  followingInProgress: Array<number>
  portionSize: number
}

type MapDispatchPropsType = {
  requestFriends: (page: number, count: number) => void
  toggleFollowingOfFriends: (id: number, willBeFollow: boolean) => void 
  changePage: (pageNumber: number) => void
  setFirstPage: () => void
}

type OwnPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const Friends: React.FC<PropsType> = ({
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

  let onPageChenged = (currentPage: number): void => {
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  friends: state.friends.friends,
  totalCount: state.friends.totalCount,
  count: state.friends.pageSize,
  page: state.friends.page,
  isFetching: state.friends.isFetching,
  followingInProgress: state.friends.followingInProgress,
  portionSize: state.friends.portionSize
});

export default connect
  <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
  (mapStateToProps, {
    requestFriends,
    toggleFollowingOfFriends,
    changePage,
    setFirstPage
})(Friends);