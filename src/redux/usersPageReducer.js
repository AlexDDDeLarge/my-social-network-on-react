import { usersAPI } from "../api/api";
import { updateObjectArray } from "../utils/validators/objectHelpers";

const FOLLOW = "react-network/users/FOLLOW";
const UNFOLLOW = "react-network/users/UNFOLLOW";
const SET_USERS = "react-network/users/SET-USERS";
const SET_TOTAL_COUNT = "react-network/users/SET-TOTAL-COUNT";
const CHANGE_PAGE = "react-network/users/CHANGE-PAGE";
const IS_FETCHING_COMPLETED = "react-network/users/IS-FETCHING-COMPLETED";
const TOGGLE_IS_FOLLOWING_PROGRESS =
  "react-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";
// const SERCH_USER = "react-network/users/SERCH-USER";
// const SET_FRIENDS = "react-network/users/SET-FRIENDS";
const SET_FIRST_PAGE = "react-network/users/SET-FIRST-PAGE";

let initialState = {
  users: [],
  friends: [],
  totalCount: 0,
  pageSize: 15,
  page: 1,
  isFetching: false,
  followingInProgress: [],
  portionSize: 10
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {followed: false})
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.pageNumber,
      };
    case IS_FETCHING_COMPLETED:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    case SET_FIRST_PAGE:
      return {
        ...state,
        page: 1
      }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const changePage = (pageNumber) => ({ type: CHANGE_PAGE, pageNumber });
export const isFetchingCompleted = (isFetching) => ({
  type: IS_FETCHING_COMPLETED,
  isFetching,
});
export const toogleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
export const setFirstPage = () => ({type: SET_FIRST_PAGE});

export const requestSearchUser = (userName, count, page) => async dispatch => {
  dispatch(isFetchingCompleted(true));
  let data = await usersAPI.searchUser(userName, count, page);
  dispatch(setUsers(data.items));
  dispatch(isFetchingCompleted(false));
}
export const requestUsers = (page, count) => async (dispatch) => {
  dispatch(isFetchingCompleted(true));
  let data = await usersAPI.getUsers(page, count);
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
  dispatch(isFetchingCompleted(false));
};
export const toggleFollowing = (id, willBeFollow) => async (dispatch) => {
  dispatch(toogleIsFollowingProgress(true, id));
  let data = await (willBeFollow ? usersAPI.follow(id) : usersAPI.unfollow(id));
  if (data.resultCode == 0) {
    willBeFollow ? dispatch(follow(id)) : dispatch(unfollow(id));
  } 
  dispatch(toogleIsFollowingProgress(false, id));
};

export default usersPageReducer;
