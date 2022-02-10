const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const CHANGE_PAGE = "CHANGE-PAGE"

let initialState = {
  users: [],
  totalCount: 0,
  count: 10,
  page: 1
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          } 
          return user;
        })
      };
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          } 
          return user;
        })
      };
    case SET_USERS: 
      return {
        ...state,
        // users: [...state.users, ...action.users]
        users: action.users
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }
    case CHANGE_PAGE: 
      return {
        ...state,
        page: action.pageNumber
      }
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const changePageAC = (pageNumber) => ({type: CHANGE_PAGE, pageNumber});

export default usersPageReducer;