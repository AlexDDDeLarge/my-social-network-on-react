import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectArray } from "../utils/validators/objectHelpers";

const FOLLOW = "react-network/users/FOLLOW";
const UNFOLLOW = "react-network/users/UNFOLLOW";
const SET_USERS = "react-network/users/SET-USERS";
const SET_TOTAL_COUNT = "react-network/users/SET-TOTAL-COUNT";
const CHANGE_PAGE = "react-network/users/CHANGE-PAGE";
const IS_FETCHING_COMPLETED = "react-network/users/IS-FETCHING-COMPLETED";
const TOGGLE_IS_FOLLOWING_PROGRESS =
  "react-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_FIRST_PAGE = "react-network/users/SET-FIRST-PAGE";


export type StateType = {
  users: UserType[]
  totalCount: number
  pageSize: number
  page: number
  isFetching: boolean
  followingInProgress: number[]
  portionSize: number
}

let initialState: StateType = {
  users: [],
  totalCount: 0,
  pageSize: 15,
  page: 1,
  isFetching: false,
  followingInProgress: [],
  portionSize: 10
};

const usersPageReducer = (state = initialState, action: UsersActionsType): StateType => {
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

//Action creators
export type UsersActionsType = 
  FollowActionType  
  | UnfollowActionType
  | SetUsersActionType
  | SetTotalCountActionType
  | ChangePageActionType
  | IsFetchingCompletedActionType
  | ToogleIsFollowingProgressActionType
  | SetFirstPageActionType

type FollowActionType = {type: typeof FOLLOW, userId: number}
export const follow = (userId: number): FollowActionType => ({ type: FOLLOW, userId });

type UnfollowActionType = {type: typeof UNFOLLOW, userId: number}
export const unfollow = (userId: number): UnfollowActionType => ({ type: UNFOLLOW, userId });

type SetUsersActionType = { type: typeof SET_USERS, users: Array<UserType>}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetTotalCountActionType = {type: typeof SET_TOTAL_COUNT, totalCount: number}
export const setTotalCount = (totalCount: number): SetTotalCountActionType => ({
  type: SET_TOTAL_COUNT,
  totalCount
});

type ChangePageActionType = {type: typeof CHANGE_PAGE, pageNumber: number}
export const changePage = (pageNumber: number): ChangePageActionType => ({ type: CHANGE_PAGE, pageNumber });

type IsFetchingCompletedActionType = {type: typeof IS_FETCHING_COMPLETED, isFetching: boolean}
export const isFetchingCompleted = (isFetching: boolean): IsFetchingCompletedActionType => ({
  type: IS_FETCHING_COMPLETED,
  isFetching
});

type ToogleIsFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: boolean,
  userId: number
}
export const toogleIsFollowingProgress = (isFetching: boolean, userId: number): ToogleIsFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

type SetFirstPageActionType = {type: typeof SET_FIRST_PAGE}
export const setFirstPage = (): SetFirstPageActionType => ({type: SET_FIRST_PAGE});

// Thunks
// type DispatchType = (action: ActionsType) => void

export const requestSearchUser = (userName: string, count: number, page: number) => async (dispatch: any) => {
  dispatch(isFetchingCompleted(true));
  let data = await usersAPI.searchUser(userName, count, page);
  dispatch(setUsers(data.items));
  dispatch(isFetchingCompleted(false));
}
export const requestUsers = (page: number, count: number) => async (dispatch: any) => {
  dispatch(isFetchingCompleted(true));
  let data = await usersAPI.getUsers(page, count);
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
  dispatch(isFetchingCompleted(false));
};
export const toggleFollowing = (id: number, willBeFollow: boolean) => async (dispatch: any) => {
  dispatch(toogleIsFollowingProgress(true, id));
  let data = await (willBeFollow ? usersAPI.follow(id) : usersAPI.unfollow(id));
  if (data.resultCode == 0) {
    willBeFollow ? dispatch(follow(id)) : dispatch(unfollow(id));
  } 
  dispatch(toogleIsFollowingProgress(false, id));
};

export default usersPageReducer;
