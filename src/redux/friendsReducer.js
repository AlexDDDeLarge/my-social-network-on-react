import { usersAPI } from "../api/api";
import { updateObjectArray } from "../utils/validators/objectHelpers";

const SET_FRIENDS = "react-network/friends/SET-FRIENDS"
const SET_TOTAL_COUNT = "react-network/friends/SET-TOTAL-COUNT";
const FOLLOW =  "react-network/friends/FOLLOW";
const UNFOLLOW = "react-network/friends/UNFOLLOW";
const CHANGE_PAGE = "react-network/friends/CHANGE-PAGE";
const SET_FIRST_PAGE = "react-network/friends/SET-FIRST-PAGE";

const IS_FETCHING_COMPLETED = "react-network/friends/IS-FETCHING-COMPLETED";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "react-network/friends/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
  friends: [],
  totalCount: 0,
  pageSize: 15,
  page: 1,
  portionSize: 10,
  isFetching: false,
  followingInProgress: []
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friends: updateObjectArray(state.friends, action.userId, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        friends: updateObjectArray(state.friends, action.userId, "id", {followed: false})
      };
    case SET_FRIENDS: 
      return {
        ...state,
        friends: action.friends
      }
    case  SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.pageNumber,
      };
    case SET_FIRST_PAGE:
      return {
        ...state,
        page: 1
      }
    case IS_FETCHING_COMPLETED:
      return {
        ...state,
        isFetching: action.isCompleted
      }
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS: 
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }
    default: 
      return state;
  }
}

export const setFriends = friends => ({type: SET_FRIENDS, friends});
export const setTotalCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount});
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const changePage = (pageNumber) => ({ type: CHANGE_PAGE, pageNumber });
export const setFirstPage = () => ({type: SET_FIRST_PAGE});
export const isFetchingCompleted = isCompleted => ({type: IS_FETCHING_COMPLETED, isCompleted});
export const toogleIsFollowingProgress = (inProgress, id) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, inProgress, id});

export const requestFriends = (page, count) => async dispatch => {
  dispatch(isFetchingCompleted(true));
  let data = await usersAPI.getFriends(page, count);
  dispatch(setFriends(data.items));
  dispatch(setTotalCount(data.totalCount))
  dispatch(isFetchingCompleted(false));
}
export const toggleFollowingOfFriends = (id, willBeFollow) => async dispatch => {
  dispatch(toogleIsFollowingProgress(true, id));
  let data = await (willBeFollow ? usersAPI.follow(id) : usersAPI.unfollow(id));
  if (data.resultCode === 0) {
    willBeFollow ? dispatch(follow(id)) : dispatch(unfollow(id));
  } 
  dispatch(toogleIsFollowingProgress(false, id));
}

export default friendsReducer;