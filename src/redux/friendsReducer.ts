import { usersAPI } from "../api/api";
import { ThunkActionType, UserType } from "../types/types";
import { updateObjectArray } from "../utils/validators/objectHelpers";

const SET_FRIENDS = "react-network/friends/SET-FRIENDS"
const SET_TOTAL_COUNT = "react-network/friends/SET-TOTAL-COUNT";
const FOLLOW =  "react-network/friends/FOLLOW";
const UNFOLLOW = "react-network/friends/UNFOLLOW";
const CHANGE_PAGE = "react-network/friends/CHANGE-PAGE";
const SET_FIRST_PAGE = "react-network/friends/SET-FIRST-PAGE";

const IS_FETCHING_COMPLETED = "react-network/friends/IS-FETCHING-COMPLETED";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "react-network/friends/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

type StateType = {
  friends: Array<UserType>
  totalCount: number
  pageSize: number
  page: number
  portionSize: number
  isFetching: boolean
  followingInProgress: Array<number>
}

let initialState: StateType = {
  friends: [],
  totalCount: 0,
  pageSize: 15,
  page: 1,
  portionSize: 10,
  isFetching: false,
  followingInProgress: []
};

const friendsReducer = (state = initialState, action: FriendsActionsType): StateType => {
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
//Actions
export type FriendsActionsType = 
  SetFriendsActionType
  | SetTotalCountActionType
  | FollowActionType
  | UnfollowActionType
  | ChangePageActionType
  | SetFirstPageActionType
  | IsFetchingCompletedActionType
  | ToogleIsFollowingProgressActionType

type SetFriendsActionType = {type: typeof SET_FRIENDS, friends: Array<UserType>}
export const setFriends = (friends: Array<UserType>): SetFriendsActionType => ({type: SET_FRIENDS, friends});

type SetTotalCountActionType = {type: typeof SET_TOTAL_COUNT, totalCount: number}
export const setTotalCount = (totalCount: number): SetTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount});

type FollowActionType = {type: typeof FOLLOW, userId: number}
export const follow = (userId: number): FollowActionType => ({ type: FOLLOW, userId });

type UnfollowActionType = {type: typeof UNFOLLOW, userId: number}
export const unfollow = (userId: number): UnfollowActionType => ({ type: UNFOLLOW, userId });

type ChangePageActionType = {type: typeof CHANGE_PAGE, pageNumber: number}
export const changePage = (pageNumber: number): ChangePageActionType => ({ type: CHANGE_PAGE, pageNumber });

type SetFirstPageActionType = {type: typeof SET_FIRST_PAGE}
export const setFirstPage = (): SetFirstPageActionType => ({type: SET_FIRST_PAGE});

type IsFetchingCompletedActionType = {type: typeof IS_FETCHING_COMPLETED, isCompleted: boolean}
export const isFetchingCompleted = (isCompleted: boolean): IsFetchingCompletedActionType => ({type: IS_FETCHING_COMPLETED, isCompleted});

type ToogleIsFollowingProgressActionType = {type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS, inProgress: boolean, id: number}
export const toogleIsFollowingProgress = (inProgress: boolean, id: number): ToogleIsFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, inProgress, id});

//Thunks
export const requestFriends = (page: number, count: number):
  ThunkActionType<void, unknown> => async (dispatch) => {
  dispatch(isFetchingCompleted(true));
  let data = await usersAPI.getFriends(page, count);
  dispatch(setFriends(data.items));
  dispatch(setTotalCount(data.totalCount))
  dispatch(isFetchingCompleted(false));
}
export const toggleFollowingOfFriends = (id: number, willBeFollow: boolean):
  ThunkActionType<void, unknown> => async (dispatch) => {
  dispatch(toogleIsFollowingProgress(true, id));
  let data = await (willBeFollow ? usersAPI.follow(id) : usersAPI.unfollow(id));
  if (data.resultCode === 0) {
    willBeFollow ? dispatch(follow(id)) : dispatch(unfollow(id));
  } 
  dispatch(toogleIsFollowingProgress(false, id));
}

export default friendsReducer;